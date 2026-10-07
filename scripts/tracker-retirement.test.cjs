const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const destination = "https://www.santaradio.co.uk/santa-tracker";

function load(file, mobileOpen = false) {
  let stateIndex = 0;
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
    },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, {
    exports, Date,
    require(id) {
      if (id === "react") return {
        useState: (value) => [stateIndex++ === 1 ? mobileOpen : value, () => {}],
        useEffect: () => {},
      };
      if (id === "react/jsx-runtime" || id === "lucide-react") return require(id);
      if (id === "next/link") return { __esModule: true, default: "next-link" };
      if (id === "next/server") return {
        NextResponse: { json: (body, init) => ({ body, ...init }) },
      };
      // No email provider, audience helper or network dependency is permitted.
      throw new Error(`Unexpected dependency in ${file}: ${id}`);
    },
  }, { filename: file });
  return exports;
}
function nodes(tree) {
  if (!tree || typeof tree !== "object") return [];
  if (Array.isArray(tree)) return tree.flatMap(nodes);
  return [tree, ...nodes(tree.props?.children)];
}

test("desktop and expanded mobile menu retain native same-tab tracker links", () => {
  for (const mobile of [false, true]) {
    const tree = nodes(load("components/Header.tsx", mobile).default());
    const links = tree.filter(n => n.props?.children === "Santa Tracker");
    assert.equal(links.length, mobile ? 2 : 1);
    for (const link of links) {
      assert.equal(link.type, "a");
      assert.equal(link.props.href, destination);
      assert.equal(link.props.target, undefined);
    }
    if (mobile) assert.equal(typeof links[1].props.onClick, "function");
  }
});

test("homepage promotion, footer and not-found page link directly to Santa Radio", () => {
  for (const file of ["components/SantaTrackerBanner.tsx", "components/Footer.tsx", "app/not-found.tsx"]) {
    const tree = nodes(load(file).default());
    const links = tree.filter(n => n.props?.href === destination);
    assert.equal(links.length, 1, file);
    assert.equal(links[0].type, "a", file);
    assert.equal(links[0].props.target, undefined, file);
    assert.equal(tree.some(n => /^\/santa-tracker/.test(n.props?.href ?? "")), false);
  }
});

test("public and preview tracker namespace permanently redirects externally", async () => {
  const config = require("../next.config.js");
  const rules = await config.redirects();
  const rule = rules.find(r => r.source === "/santa-tracker/:path*");
  assert.equal(rule.destination, destination);
  assert.equal(rule.permanent, true);
  assert.equal(fs.existsSync("app/santa-tracker/page.tsx"), false);
  assert.equal(fs.existsSync("app/santa-tracker/preview/page.tsx"), false);
});

test("sitemap and shipped application contain no old tracker links or simulator", () => {
  assert.equal(load("app/sitemap.ts").default().some(entry => entry.url.includes("santa-tracker")), false);
  for (const dir of ["app", "components", "lib", "data"]) {
    for (const name of fs.readdirSync(dir, { recursive: true })) {
      if (!/\.(ts|tsx)$/.test(name)) continue;
      const content = fs.readFileSync(`${dir}/${name}`, "utf8");
      assert.doesNotMatch(content, /["'`]\/santa-tracker|https:\/\/www\.santaguy\.co\.uk\/santa-tracker/);
      assert.doesNotMatch(content, /SantaPreviewPanel|SantaTrackerClient|santa-tracker-preview/);
    }
  }
});

test("signup and scheduled sends return Gone without provider access", async () => {
  for (const [file, method] of [
    ["app/api/notify-signup/route.ts", "POST"],
    ["app/api/cron/christmas-eve/route.ts", "GET"],
  ]) {
    const response = await load(file)[method]();
    assert.equal(response.status, 410);
    assert.equal(response.body.trackerUrl, destination);
    assert.equal(response.headers["Cache-Control"], "no-store");
  }
  const config = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
  assert.equal((config.crons ?? []).some(c => c.path === "/api/cron/christmas-eve"), false);
});

test("shared contact email and radio remain; tracker-only assets are retired", () => {
  assert.equal(fs.existsSync("app/api/contact/route.ts"), true);
  assert.equal(fs.existsSync("contexts/RadioContext.tsx"), true);
  assert.equal(fs.existsSync("app/api/now-playing/route.ts"), true);
  assert.equal(fs.existsSync("lib/resendAudience.ts"), false);
  assert.equal(fs.existsSync("public/images/santa-post-stamp.png"), false);
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  assert.ok(pkg.dependencies.resend);
  assert.equal(pkg.dependencies["html-to-image"], undefined);
});
