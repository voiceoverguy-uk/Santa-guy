const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

// Run the actual route with isolated cache, clock, environment and HTTP mocks.
const source = ts.transpileModule(fs.readFileSync("app/api/reviews/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const fallback = { rating: 5, reviewCount: 119 };
const verified = {
  name: "VoiceoverGuy", website: "https://www.voiceoverguy.co.uk/",
  rating: 4.9, user_ratings_total: 140,
};

function route({ candidates = ["official"], places = { official: verified },
  searchStatus = "OK", apiKey = "test-key", fail, detailStatus = "OK" } = {}) {
  let now = 1000;
  const calls = [];
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    require: (name) => {
      assert.equal(name, "next/server");
      return { NextResponse: { json: (value) => JSON.parse(JSON.stringify(value)) } };
    },
    process: { env: { GOOGLE_PLACES_API_KEY: apiKey } },
    URL,
    Date: { now: () => now },
    fetch: async (input) => {
      const url = new URL(input);
      calls.push(url);
      if (fail === "throw") throw new Error("network unavailable");
      const search = url.pathname.includes("findplacefromtext");
      if (!search) {
        assert.equal(url.searchParams.get("fields"), "name,website,rating,user_ratings_total");
      }
      return {
        ok: fail !== "http",
        json: async () => {
          if (fail === "json") throw new SyntaxError("Invalid JSON");
          return search
            ? { status: searchStatus, candidates: candidates.map(place_id => ({ place_id })) }
            : { status: detailStatus, result: places[url.searchParams.get("place_id")] };
        },
      };
    },
  });
  return { get: exports.GET, calls, advance: (ms) => { now += ms; } };
}

test("skips a same-name impostor ahead of the verified business", async () => {
  const app = route({
    candidates: ["impostor", "official"],
    places: { impostor: { ...verified, website: "https://other.example/", rating: 1 }, official: verified },
  });
  assert.deepEqual(await app.get(), { rating: 4.9, reviewCount: 140 });
  assert.equal(app.calls.length, 3);
});

test("ambiguous verified matches fail closed regardless of ordering", async () => {
  for (const candidates of [["a", "b"], ["b", "a"]]) {
    const app = route({ candidates, places: { a: verified, b: { ...verified, rating: 2 } } });
    assert.deepEqual(await app.get(), fallback);
  }
});

test("duplicate candidate IDs do not create false ambiguity", async () => {
  const app = route({ candidates: ["official", "official", null, ""] });
  assert.deepEqual(await app.get(), { rating: 4.9, reviewCount: 140 });
  assert.equal(app.calls.length, 2);
});

test("requires both the exact business name and trusted website host", async () => {
  const invalid = [
    { name: "SantaGuy" }, { name: "VoiceoverGuy impersonator" }, { name: null },
    { website: undefined }, { website: "not a URL" },
    { website: "https://voiceoverguy.co.uk.evil.example/" },
    { website: "https://evil.example/voiceoverguy.co.uk" },
    { website: "https://voiceoverguy.co.uk@evil.example/" },
    { website: "https://attacker@voiceoverguy.co.uk/" },
    { website: "ftp://voiceoverguy.co.uk/" },
  ];
  for (const patch of invalid) {
    assert.deepEqual(await route({ places: { official: { ...verified, ...patch } } }).get(), fallback);
  }
  for (const website of ["http://voiceoverguy.co.uk/", "https://WWW.voiceoverguy.co.uk/contact"]) {
    assert.deepEqual(await route({ places: { official: { ...verified, website } } }).get(),
      { rating: 4.9, reviewCount: 140 });
  }
});

test("invalid rating/count values cannot be published", async () => {
  for (const patch of [
    { rating: "5" }, { rating: NaN }, { rating: Infinity }, { rating: 0 }, { rating: 6 },
    { user_ratings_total: "140" }, { user_ratings_total: -1 },
    { user_ratings_total: 1.5 }, { user_ratings_total: Infinity },
  ]) {
    assert.deepEqual(await route({ places: { official: { ...verified, ...patch } } }).get(), fallback);
  }
});

test("missing credentials, results, failed status and upstream failures preserve fallback", async () => {
  for (const options of [
    { apiKey: "" }, { candidates: [] }, { searchStatus: "REQUEST_DENIED" },
    { detailStatus: "REQUEST_DENIED" }, { places: {} },
    { fail: "http" }, { fail: "throw" }, { fail: "json" },
    { candidates: ["official", "unresolved"] },
  ]) {
    assert.deepEqual(await route(options).get(), fallback);
  }
});

test("preserves the response shape and 24-hour cache including fallback caching", async () => {
  for (const places of [{ official: verified }, { official: { ...verified, name: "Wrong" } }]) {
    const app = route({ places });
    const initial = await app.get();
    assert.deepEqual(Object.keys(initial).sort(), ["rating", "reviewCount"]);
    app.advance(24 * 60 * 60 * 1000 - 1);
    assert.deepEqual(await app.get(), initial);
    assert.equal(app.calls.length, 2);
    app.advance(1);
    assert.deepEqual(await app.get(), initial);
    assert.equal(app.calls.length, 4);
  }
});