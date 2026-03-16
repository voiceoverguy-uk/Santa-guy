export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Removed — SantaGuy</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    body { font-family: system-ui, sans-serif; background: #FFF8F0; color: #333; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; }
    .container { max-width: 480px; padding: 2rem; }
    h1 { color: #9C060B; font-size: 1.5rem; margin-bottom: 0.5rem; }
    p { color: #666; line-height: 1.6; }
    a { color: #9C060B; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <h1>This page has been removed</h1>
    <p>The page you're looking for no longer exists. It was part of an older version of the site.</p>
    <p><a href="/">Visit the SantaGuy homepage</a></p>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 410,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
