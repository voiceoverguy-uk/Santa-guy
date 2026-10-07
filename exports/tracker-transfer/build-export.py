"""Build a whitelist-only transfer ZIP; never reads environment settings."""
import hashlib
import json
from pathlib import Path
import re
import subprocess
import tempfile
import zipfile

root = Path(__file__).resolve().parents[2]
output = root / "exports/santa-tracker-transfer.zip"
core = [
    "app/santa-tracker/page.tsx",
    "app/santa-tracker/preview/page.tsx",
    "components/SantaTrackerClient.tsx",
    "components/SantaMap.tsx",
    "components/SantaStats.tsx",
    "components/SantaStory.tsx",
    "components/SantaTimeline.tsx",
    "components/SantaPreviewPanel.tsx",
    "components/NotifySignup.tsx",
    "components/StructuredData.tsx",
    "lib/santaRoute.ts",
    "lib/santaPreview.ts",
    "data/santaRouteStops.ts",
    "data/santaHolidays.ts",
    "data/worldMapPaths.ts",
    "public/images/santa-post-stamp.png",
    "public/santa-guy-logo-og.png",
    "scripts/tracker-pass2.test.cjs",
]
email = [
    "app/api/notify-signup/route.ts",
    "app/api/cron/christmas-eve/route.ts",
    "lib/resendAudience.ts",
]
files = {}
origins = {}

def copy(src, dest):
    files[dest] = (root / src).read_bytes()
    origins[dest] = src

for path in core:
    copy(path, "source/" + path)
for path in email:
    copy(path, "optional/email-reminders/source/" + path)
copy("components/SantaTrackerBanner.tsx",
     "optional/homepage-banner/components/SantaTrackerBanner.tsx")
copy("vercel.json", "optional/email-reminders/scheduler-reference.json")
copy("exports/tracker-transfer/TRANSFER.md", "TRANSFER.md")

css = (root / "app/globals.css").read_text()
theme = css[css.index("@theme"):css.index("\nhtml {")]
stars = css[css.index(".star-field {"):css.index("@keyframes marquee-scroll")]
motion = css[css.index("@media (prefers-reduced-motion: reduce)"):]
motion = re.sub(r"  \.marquee-track \{[^}]*\}\n", "", motion)
files["styles/tracker.css"] = (
    "/* Merge after the destination's Tailwind v4 import. Extracted unchanged\n"
    "   tracker rules; unrelated site styles and base resets are omitted. */\n"
    + theme + "\n" + stars + "\n" + motion
).encode()
origins["styles/tracker.css"] = "extracted tracker rules from app/globals.css"
names = ["next", "react", "react-dom", "tailwindcss", "@tailwindcss/postcss",
         "postcss", "autoprefixer", "lucide-react", "html-to-image",
         "typescript", "@types/node", "@types/react", "@types/react-dom", "resend"]
deps = {}
for name in names:
    info = json.loads((root / "node_modules" / name / "package.json").read_text())
    deps[name] = {"version": info["version"], "license": info.get("license"),
                  "optional": name == "resend"}
files["DEPENDENCIES.json"] = json.dumps(deps, indent=2).encode() + b"\n"

# Resolve every local import against the union of the provided modules.
included = set(core + email + ["components/SantaTrackerBanner.tsx"])
for path in included:
    if not path.endswith((".ts", ".tsx")):
        continue
    text = (root / path).read_text()
    for ref in re.findall(r'(?:from\s+|import\s*\(\s*)["\']([^"\']+)', text):
        if ref.startswith("@/"):
            target = ref[2:]
        elif ref.startswith("."):
            target = str((Path(path).parent / ref).as_posix())
        else:
            continue
        target = str(Path(target))
        assert any(target + ext in included for ext in ("", ".ts", ".tsx")), (path, ref)

# Asset references used by the included components must be in the bundle.
for path in included:
    if path.endswith((".ts", ".tsx")):
        for asset in re.findall(r'["\'](/[^"\']+\.(?:png|webp|jpg|mp3))["\']',
                                (root / path).read_text()):
            assert "public" + asset in included, (path, asset)

# Test the exported copies in isolation using already installed dependencies.
with tempfile.TemporaryDirectory(prefix="tracker-export-") as temp:
    staging = Path(temp)
    for name, data in files.items():
        target = staging / name
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
    (staging / "source/node_modules").symlink_to(root / "node_modules",
                                              target_is_directory=True)
    result = subprocess.run(
        ["node", "--test", "scripts/tracker-pass2.test.cjs"],
        cwd=staging / "source", text=True, capture_output=True, check=True)
    test_output = result.stdout

# File allowlisting plus content checks; do not open any .env or credentials.
for name, data in files.items():
    assert not any(part in {".git", "node_modules", ".next", "logs"}
                   or part.startswith(".env") for part in Path(name).parts), name
    assert not name.endswith((".log", ".zip")), name
    if name.endswith((".ts", ".tsx", ".cjs", ".json", ".md", ".css")):
        text = data.decode()
        assert not re.search(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY", text), name
        assert not re.search(r"\b(?:re_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{30,}|gh[pousr]_[A-Za-z0-9]{20,})\b", text), name

files["VERIFICATION.txt"] = (
    "Export verification\n"
    "- Explicit source-file whitelist only; no environment or subscriber data read.\n"
    "- All local imports resolve within supplied core/optional modules.\n"
    "- Referenced local image assets included.\n"
    "- Original source and assets copied byte-for-byte; only stylesheet extraction is derived.\n"
    "- Known credential patterns checked in text payloads; no matches.\n"
    "- Existing regression tests run against extracted source using preinstalled dependencies.\n"
    "- This is not a fresh browser test or a test of the destination project.\n\n"
    + test_output
).encode()
manifest = [
    {"path": name, "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest(),
     "origin": origins.get(name, "generated export documentation")}
    for name, data in sorted(files.items())
]
files["MANIFEST.json"] = json.dumps(manifest, indent=2).encode() + b"\n"
with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as archive:
    for name, data in sorted(files.items()):
        archive.writestr("santa-tracker-transfer/" + name, data)
with zipfile.ZipFile(output) as archive:
    assert archive.testzip() is None
    for record in manifest:
        data = archive.read("santa-tracker-transfer/" + record["path"])
        assert hashlib.sha256(data).hexdigest() == record["sha256"]
    for name, src in origins.items():
        if (root / src).is_file():
            assert archive.read("santa-tracker-transfer/" + name) == (root / src).read_bytes()
print(test_output)
print(f"Verified {len(files)} archive entries, {output.stat().st_size:,} bytes: {output.relative_to(root)}")
