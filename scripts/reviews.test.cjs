const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

// Exercise the actual route with isolated module cache, clock, environment and HTTP.
const source = ts.transpileModule(fs.readFileSync("app/api/reviews/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const DAY = 24 * 60 * 60 * 1000;
const verified = {
  name: "VoiceoverGuy", website: "https://www.voiceoverguy.co.uk/",
  rating: 4.9, user_ratings_total: 140,
};
const unavailable = { status: "unavailable" };

function route(options = {}) {
  let now = Date.parse("2026-09-30T12:00:00.000Z");
  const config = {
    candidates: ["official"], places: { official: verified },
    searchStatus: "OK", detailStatus: "OK", apiKey: "top-secret-test-key",
    ...options,
  };
  const calls = [];
  const exports = {};
  const FakeDate = class extends Date { static now() { return now; } };
  vm.runInNewContext(source, {
    exports,
    require: (name) => {
      assert.equal(name, "next/server");
      return { NextResponse: { json: (body, init = {}) => ({
        body: JSON.parse(JSON.stringify(body)),
        status: init.status || 200,
        headers: init.headers,
      }) } };
    },
    process: { env: { GOOGLE_PLACES_API_KEY: config.apiKey } },
    URL,
    Date: FakeDate,
    AbortSignal: config.fail === "timeout"
      ? { timeout: (ms) => { assert.equal(ms, 5000); return AbortSignal.abort(); } }
      : AbortSignal,
    fetch: async (input, init) => {
      const url = new URL(input);
      calls.push({ url, init });
      assert.equal(url.origin, "https://maps.googleapis.com");
      assert.equal(url.searchParams.get("key"), config.apiKey);
      assert.equal(init.cache, "no-store");
      assert.equal(typeof init.signal?.aborted, "boolean");
      if (config.fail === "timeout") {
        assert.equal(init.signal.aborted, true);
        throw new Error("request timed out");
      }
      const search = url.pathname.endsWith("/findplacefromtext/json");
      assert.ok(search || url.pathname.endsWith("/details/json"));
      assert.equal(url.searchParams.get("fields"),
        search ? "place_id" : "name,website,rating,user_ratings_total");
      if (config.pause) await config.pause.promise;
      if (config.fail === "throw") throw new Error(`secret ${config.apiKey}`);
      return {
        ok: config.fail !== "http",
        json: async () => {
          if (config.fail === "json") throw new SyntaxError("Invalid JSON");
          return search
            ? { status: config.searchStatus,
              candidates: config.candidates.map(place_id => ({ place_id })) }
            : { status: config.detailStatus,
              result: config.places[url.searchParams.get("place_id")] };
        },
      };
    },
  });
  return {
    get: exports.GET, calls, config,
    advance: (ms) => { now += ms; },
    checkedAt: () => new Date(now).toISOString(),
  };
}

function expectResponse(response, status, body) {
  assert.equal(response.status, status);
  assert.deepEqual(response.body, body);
  assert.equal(response.headers["Cache-Control"], "no-store");
  assert.doesNotMatch(JSON.stringify(response), /top-secret-test-key/);
}

test("verified values, checkedAt, 24h cache and refreshed count", async () => {
  const app = route();
  const checkedAt = app.checkedAt();
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 4.9, reviewCount: 140, checkedAt });
  app.config.places.official = { ...verified, rating: 5, user_ratings_total: 141 };
  app.advance(DAY - 1);
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 4.9, reviewCount: 140, checkedAt });
  assert.equal(app.calls.length, 2);
  app.advance(1);
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 5, reviewCount: 141, checkedAt: app.checkedAt() });
  assert.equal(app.calls.length, 4);
});

test("skips a same-name impostor ahead of the verified business", async () => {
  const app = route({
    candidates: ["impostor", "official"],
    places: { impostor: { ...verified, website: "https://other.example/", rating: 1 }, official: verified },
  });
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 4.9, reviewCount: 140, checkedAt: app.checkedAt() });
  assert.equal(app.calls.length, 3);
});

test("ambiguous verified matches, including after a valid match, fail closed", async () => {
  for (const candidates of [["a", "b"], ["b", "a"]]) {
    const app = route({ candidates, places: { a: verified, b: { ...verified, rating: 2 } } });
    expectResponse(await app.get(), 503, unavailable);
  }
  expectResponse(await route({ candidates: ["official", "unresolved"] }).get(), 503, unavailable);
});

test("duplicate candidate IDs do not create false ambiguity", async () => {
  const app = route({ candidates: ["official", "official", null, ""] });
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 4.9, reviewCount: 140, checkedAt: app.checkedAt() });
  assert.equal(app.calls.length, 2);
});

test("requires exact business name and trusted website host", async () => {
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
    expectResponse(await route({ places: { official: { ...verified, ...patch } } }).get(), 503, unavailable);
  }
  for (const website of ["http://voiceoverguy.co.uk/", "https://WWW.voiceoverguy.co.uk/contact"]) {
    const app = route({ places: { official: { ...verified, website } } });
    expectResponse(await app.get(), 200,
      { status: "verified", rating: 4.9, reviewCount: 140, checkedAt: app.checkedAt() });
  }
});

test("invalid rating/count values cannot be published", async () => {
  for (const patch of [
    { rating: "5" }, { rating: NaN }, { rating: Infinity }, { rating: 0 }, { rating: 6 },
    { user_ratings_total: "140" }, { user_ratings_total: -1 },
    { user_ratings_total: 1.5 }, { user_ratings_total: Infinity },
  ]) {
    expectResponse(await route({ places: { official: { ...verified, ...patch } } }).get(), 503, unavailable);
  }
});

test("cold instance with missing credentials, empty results or upstream failure returns 503, never fallback", async () => {
  for (const options of [
    { apiKey: "" }, { candidates: [] }, { searchStatus: "REQUEST_DENIED" },
    { detailStatus: "REQUEST_DENIED" }, { places: {} },
    { fail: "http" }, { fail: "throw" }, { fail: "json" }, { fail: "timeout" },
  ]) {
    const app = route(options);
    expectResponse(await app.get(), 503, unavailable);
    if (!options.apiKey && options.apiKey !== undefined) assert.equal(app.calls.length, 0);
  }
});

test("a cache older than seven days cannot be revived by failures; successful retry restores it", async () => {
  const app = route();
  await app.get();
  app.advance(7 * DAY + 1);
  app.config.fail = "json";
  expectResponse(await app.get(), 503, unavailable);
  app.advance(60 * 1000);
  app.config.fail = undefined;
  app.config.places.official = { ...verified, user_ratings_total: 143 };
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 4.9, reviewCount: 143, checkedAt: app.checkedAt() });
});

test("failure preserves original checkedAt for seven days, then removes expired values", async () => {
  const app = route();
  const checkedAt = app.checkedAt();
  await app.get();
  app.config.fail = "http";
  app.advance(DAY);
  expectResponse(await app.get(), 200,
    { status: "stale", rating: 4.9, reviewCount: 140, checkedAt });
  assert.equal(app.calls.length, 3);
  app.advance(7 * DAY - DAY);
  expectResponse(await app.get(), 200,
    { status: "stale", rating: 4.9, reviewCount: 140, checkedAt });
  app.advance(1);
  expectResponse(await app.get(), 503, unavailable);
});

test("bounded backoff avoids repeated failed upstream calls, then recovers and resets", async () => {
  const app = route({ fail: "http" });
  expectResponse(await app.get(), 503, unavailable);
  assert.equal(app.calls.length, 1);
  for (let i = 0; i < 10; i++) expectResponse(await app.get(), 503, unavailable);
  assert.equal(app.calls.length, 1);
  app.advance(60 * 1000);
  await app.get();
  assert.equal(app.calls.length, 2);
  app.advance(119 * 1000);
  await app.get();
  assert.equal(app.calls.length, 2);
  app.advance(1000);
  app.config.fail = undefined;
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 4.9, reviewCount: 140, checkedAt: app.checkedAt() });
  assert.equal(app.calls.length, 4);
  app.config.fail = "http";
  app.advance(DAY);
  await app.get();
  assert.equal(app.calls.length, 5);
  app.advance(60 * 1000);
  await app.get();
  assert.equal(app.calls.length, 6);
});

test("concurrent requests share one in-flight refresh and return the same checkedAt", async () => {
  let release;
  const pause = { promise: new Promise(resolve => { release = resolve; }) };
  const app = route({ pause });
  const requests = Array.from({ length: 12 }, () => app.get());
  assert.equal(app.calls.length, 1);
  release();
  const responses = await Promise.all(requests);
  for (const response of responses) {
    expectResponse(response, 200,
      { status: "verified", rating: 4.9, reviewCount: 140, checkedAt: app.checkedAt() });
  }
  assert.equal(app.calls.length, 2);
});

test("concurrent failed refresh has one attempt and stale data recovers with new count", async () => {
  const app = route();
  const checkedAt = app.checkedAt();
  await app.get();
  app.advance(DAY);
  app.config.fail = "throw";
  const results = await Promise.all(Array.from({ length: 8 }, () => app.get()));
  for (const response of results) expectResponse(response, 200,
    { status: "stale", rating: 4.9, reviewCount: 140, checkedAt });
  assert.equal(app.calls.length, 3);
  app.advance(60 * 1000);
  app.config.fail = undefined;
  app.config.places.official = { ...verified, user_ratings_total: 142 };
  expectResponse(await app.get(), 200,
    { status: "verified", rating: 4.9, reviewCount: 142, checkedAt: app.checkedAt() });
});

// Small hook/JSX harness checks client states without adding browser/test dependencies.
const clientSource = ts.transpileModule(fs.readFileSync("components/GoogleReviews.tsx", "utf8"), {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX,
  },
}).outputText;

function widget(fetchMock) {
  let now = Date.parse("2026-09-30T12:00:00.000Z");
  let state;
  let effect;
  let cleanup;
  let nextTimer = 0;
  const timers = new Map();
  const intervals = new Map();
  const requests = [];
  const exports = {};
  const element = (type, props) => ({ type, props });
  const document = {
    visibilityState: "visible",
    addEventListener: () => {},
    removeEventListener: () => {},
  };
  const FakeDate = class extends Date { static now() { return now; } };
  vm.runInNewContext(clientSource, {
    exports, Date: FakeDate, document, AbortController,
    window: {
      setTimeout: (callback, ms) => {
        assert.equal(ms, 8000);
        const id = ++nextTimer;
        timers.set(id, callback);
        return id;
      },
      clearTimeout: id => timers.delete(id),
      setInterval: (callback, ms) => {
        assert.equal(ms, 5 * 60 * 1000);
        const id = ++nextTimer;
        intervals.set(id, callback);
        return id;
      },
      clearInterval: id => intervals.delete(id),
    },
    fetch: (url, init) => {
      assert.equal(url, "/api/reviews");
      assert.equal(init.cache, "no-store");
      requests.push(init);
      return fetchMock(init, requests.length);
    },
    require: name => {
      if (name === "react") return {
        useState: initial => {
          if (state === undefined) state = initial;
          return [state, update => { state = typeof update === "function" ? update(state) : update; }];
        },
        useEffect: callback => { if (!effect) effect = callback; },
      };
      if (name === "lucide-react") return { Star: () => null };
      if (name === "react/jsx-runtime") return { jsx: element, jsxs: element };
      throw new Error(`Unexpected import: ${name}`);
    },
  });
  const render = () => exports.default();
  const text = () => {
    const flatten = node => {
      if (Array.isArray(node)) return node.map(flatten).join("");
      if (node && typeof node === "object") return flatten(node.props?.children);
      return node === undefined || node === null ? "" : String(node);
    };
    return flatten(render());
  };
  render();
  cleanup = effect();
  return {
    text, render, requests, timers, intervals,
    checkedAt: () => new Date(now).toISOString(),
    advance: ms => { now += ms; },
    tick: () => { for (const callback of intervals.values()) callback(); },
    cleanup: () => cleanup(),
  };
}

async function settle() {
  await new Promise(resolve => setImmediate(resolve));
}

test("widget starts neutral, accepts only validated HTTP success, and keeps the official link", async () => {
  let respond;
  const pending = new Promise(resolve => { respond = resolve; });
  const client = widget(() => pending);
  assert.match(client.text(), /Loading Google reviews/);
  assert.doesNotMatch(client.text(), /Rated|119/);
  const tree = client.render();
  assert.equal(tree.props.children[0].props.children[0].props.children[1].props.style.width, "0%");
  const link = tree.props.children[2];
  assert.equal(link.props.href,
    "https://www.google.com/maps/place//data=!4m4!3m3!1s0x4879672543b8552f:0xa3cdce7ae1235f05!9m1!1b1?g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA");
  respond({ ok: true, status: 200, json: async () =>
    ({ status: "verified", rating: 4.9, reviewCount: 140, checkedAt: client.checkedAt() }) });
  await settle();
  assert.match(client.text(), /Rated 4.9 on Google by 140 Happy Clients/);
  assert.doesNotMatch(client.text(), /Last checked/);
  assert.equal(client.timers.size, 0);
  client.cleanup();
});

test("widget intentionally handles 503 and rejects malformed or expired responses", async () => {
  for (const response of [
    { status: 503, ok: false, body: { status: "unavailable" } },
    { status: 200, ok: true, body: { status: "verified", rating: 5, reviewCount: "119",
      checkedAt: new Date().toISOString() } },
    { status: 200, ok: true, body: { status: "stale", rating: 4.9, reviewCount: 140,
      checkedAt: "2020-01-01T00:00:00.000Z" } },
  ]) {
    const client = widget(async () => ({
      status: response.status, ok: response.ok, json: async () => response.body,
    }));
    await settle();
    assert.match(client.text(), /Google reviews temporarily unavailable/);
    assert.doesNotMatch(client.text(), /Rated|119/);
    client.cleanup();
  }
});

test("widget shows checked date on stale response and retains recent verified data on 503", async () => {
  let client;
  client = widget(async (init, count) => count === 1
    ? { ok: true, status: 200, json: async () =>
      ({ status: "verified", rating: 4.9, reviewCount: 140, checkedAt: client.checkedAt() }) }
    : { ok: false, status: 503, json: async () => ({ status: "unavailable" }) });
  await settle();
  assert.doesNotMatch(client.text(), /Last checked/);
  client.advance(5 * 60 * 1000);
  client.tick();
  await settle();
  assert.match(client.text(), /Rated 4.9 on Google by 140 Happy Clients/);
  assert.match(client.text(), /Last checked .*temporarily unable to refresh/);
  client.advance(8 * DAY);
  client.tick();
  await settle();
  assert.match(client.text(), /Google reviews temporarily unavailable/);
  assert.doesNotMatch(client.text(), /Rated/);
  client.cleanup();
});

test("hung widget request aborts after eight seconds; next visible refresh can recover", async () => {
  let client;
  client = widget((init, count) => {
    if (count > 1) return Promise.resolve({
      ok: true, status: 200, json: async () =>
        ({ status: "verified", rating: 4.9, reviewCount: 145, checkedAt: client.checkedAt() }),
    });
    return new Promise((resolve, reject) => {
      init.signal.addEventListener("abort", () => reject(new Error("aborted")));
    });
  });
  assert.equal(client.timers.size, 1);
  for (const timeout of client.timers.values()) timeout();
  await settle();
  assert.equal(client.requests[0].signal.aborted, true);
  assert.match(client.text(), /Google reviews temporarily unavailable/);
  assert.equal(client.timers.size, 0);
  client.advance(5 * 60 * 1000);
  client.tick();
  await settle();
  assert.match(client.text(), /Rated 4.9 on Google by 145 Happy Clients/);
  assert.equal(client.requests.length, 2);
  client.cleanup();
});