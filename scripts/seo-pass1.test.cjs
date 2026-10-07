const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

// Execute real server-page functions, retaining StructuredData props in the
// React element tree. Client components are not executed in these unit tests.
function load(file) {
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, {
    exports, Date,
    require: (id) => {
      if (id === "react/jsx-runtime" || id === "lucide-react") return require(id);
      if (id === "next/server") return {
        NextResponse: {
          redirect: (url, init) => ({ url, status: init.status }),
          next: () => ({ next: true }),
        },
      };
      if (id.startsWith("@/components/") || id === "next/link") return { default: id, __esModule: true };
      throw new Error(`Unexpected import in ${file}: ${id}`);
    },
  }, { filename: file });
  return exports;
}

function schemas(file) {
  const result = [];
  function visit(node) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) return node.forEach(visit);
    if (node.type === "@/components/StructuredData") result.push(node.props.data);
    visit(node.props?.children);
  }
  visit(load(file).default());
  return JSON.parse(JSON.stringify(result));
}

const dates = {
  "5o9Va4YsI3g": "2020-10-19T04:52:35-07:00",
  "yi-4Fm40nmE": "2016-12-07T07:58:07-08:00",
  "Qqu-HDA2KJE": "2022-01-18T04:00:11-08:00",
  Jjj1as7mpUw: "2025-12-15T06:49:31-08:00",
  P44bGiUI0vE: "2022-11-18T19:01:50-08:00",
};
const durations = {
  "Santa-voice-Guy-Demo-1.mp3": "PT53.995S",
  "Santa-voice-Guy-Demo-2.mp3": "PT38.504S",
  "Santa-voice-Guy-Demo-3.mp3": "PT165.564S",
  "santa-calls-capital-breakfast-show.mp3": "PT477.283S",
  "global-cash-call-santa-guy-harris.mp3": "PT211.069S",
};
const mediaPages = ["app/page.tsx", "app/santa-voice-demo/page.tsx"];

test("all five VideoObjects use exact evidenced provider dates and no invented extras", () => {
  const videos = mediaPages.flatMap(schemas).filter(s => s["@type"] === "VideoObject");
  assert.equal(videos.length, 5);
  const seen = new Set();
  for (const video of videos) {
    const id = new URL(video.embedUrl).pathname.split("/").pop();
    seen.add(id);
    assert.equal(video.uploadDate, dates[id]);
    assert.ok(video.name && video.description && video.thumbnailUrl);
    for (const key of ["contentUrl", "duration", "interactionStatistic", "creator", "author", "publisher"]) {
      assert.equal(video[key], undefined, key);
    }
  }
  assert.equal(seen.size, 5);
});

test("all seven playable AudioObjects have measured durations, MIME, identity and no dates", () => {
  const audio = mediaPages.flatMap(schemas).filter(s => s["@type"] === "AudioObject");
  assert.equal(audio.length, 7);
  const identities = new Map();
  for (const item of audio) {
    const file = new URL(item.contentUrl).pathname.split("/").pop();
    assert.equal(item.uploadDate, undefined);
    assert.equal(item.duration, durations[file]);
    assert.equal(item.encodingFormat, "audio/mpeg");
    assert.ok(item["@id"]);
    assert.ok(item.isPartOf);
    if (identities.has(file)) assert.equal(item["@id"], identities.get(file));
    identities.set(file, item["@id"]);
    if (file === "Santa-voice-Guy-Demo-2.mp3") {
      assert.equal(item.name, "Santa Commercial Reel");
      assert.doesNotMatch(item.description, /Naughty|Nice|BBC Radio 2/i);
    }
    for (const key of ["creator", "author", "publisher"]) assert.equal(item[key], undefined);
  }
  assert.equal(identities.size, 5);
});

test("homepage emits no self-serving reviews or ratings; visible testimonial components remain", () => {
  const data = JSON.stringify(schemas("app/page.tsx"));
  assert.doesNotMatch(data, /"Review"|"AggregateRating"|"reviewRating"|"aggregateRating"/);
  const source = fs.readFileSync("app/page.tsx", "utf8");
  assert.match(source, /<TestimonialSlider\s*\/>/);
  assert.match(source, /<GoogleReviews\s*\/>/);
});

test("Demo 2 erroneous identification is removed without changing player or FAQ components", () => {
  const source = fs.readFileSync("components/DemoCards.tsx", "utf8");
  assert.match(source, /Santa Commercial Reel/);
  assert.doesNotMatch(source, /Naughty|Nice/);
  for (const file of ["app/page.tsx", "app/santa-voice/page.tsx"]) {
    assert.match(fs.readFileSync(file, "utf8"), /<FAQSection/);
  }
});

test("existing person and business nodes use consistent IDs, with no business sameAs", () => {
  const home = schemas("app/page.tsx");
  const personId = "https://www.santaguy.co.uk/guy-harris-santa-voice#person";
  const businessId = "https://www.santaguy.co.uk/#business";
  const person = home.find(s => s["@type"] === "Person");
  const business = home.find(s => s["@type"] === "ProfessionalService");
  assert.equal(person["@id"], personId);
  assert.equal(person.url, "https://www.santaguy.co.uk/guy-harris-santa-voice");
  assert.equal(business["@id"], businessId);
  assert.equal(business.sameAs, undefined);
  assert.equal(person.worksFor["@id"], businessId);
  assert.equal(business.founder["@id"], personId);
  assert.equal(home.find(s => s["@type"] === "WebSite")["@id"], "https://www.santaguy.co.uk/#website");
  const profile = schemas("app/guy-harris-santa-voice/page.tsx").find(s => s["@type"] === "ProfilePage");
  assert.equal(profile.mainEntity["@id"], personId);
  assert.equal(schemas("app/santa-voice/page.tsx").find(s => s["@type"] === "Person")["@id"], personId);
});

test("app collection is a CollectionPage with breadcrumbs, not a fictional app", () => {
  const data = schemas("app/santa-apps/page.tsx");
  assert.ok(data.some(s => s["@type"] === "CollectionPage"));
  assert.ok(data.some(s => s["@type"] === "BreadcrumbList"));
  assert.doesNotMatch(JSON.stringify(data), /SoftwareApplication|aggregateRating|operatingSystem|offers/);
});

test("retired tracker pages are removed without noindexing the site", () => {
  assert.equal(fs.existsSync("app/santa-tracker/page.tsx"), false);
  assert.equal(fs.existsSync("app/santa-tracker/preview/page.tsx"), false);
  assert.doesNotMatch(fs.readFileSync("app/layout.tsx", "utf8"), /noindex|index:\s*false/);
});

test("sitemap keeps eleven canonical routes, excluding the retired tracker", () => {
  const entries = load("app/sitemap.ts").default();
  const paths = entries.map(item => new URL(item.url).pathname).sort();
  assert.equal(JSON.stringify(paths), JSON.stringify([
    "/", "/guy-harris-santa-voice", "/hire-santa-voice", "/santa-voice",
    "/santa-apps", "/santa-radio", "/contact-santa-guy", "/santa-guy-message",
    "/santa-voice-demo", "/santa-ringtones", "/santa-text-alerts",
  ].sort()));
  for (const entry of entries) assert.equal(entry.lastModified, undefined);
});

test("specific legacy demo redirect wins before catchall, preserving queries and existing routes", () => {
  const { middleware } = load("middleware.ts");
  for (const [path, target] of [
    ["/hello-world/santa-voice-demo", "/santa-voice-demo"],
    ["/hello-world/santa-voice-demo/", "/santa-voice-demo"],
    ["/HELLO-WORLD/SANTA-VOICE-DEMO", "/santa-voice-demo"],
    ["/hello-world/santa-apps", "/santa-apps"],
    ["/santa-message", "/santa-guy-message"],
    ["/contact-santa", "/contact-santa-guy"],
    ["/hello-world/other", "/"],
  ]) {
    const response = middleware({
      nextUrl: { pathname: path, search: "?source=test" },
      headers: new Map([["host", "www.santaguy.co.uk"], ["x-forwarded-proto", "https"]]),
    });
    assert.equal(response.status, 301);
    assert.equal(response.url, `https://www.santaguy.co.uk${target}?source=test`);
  }
});