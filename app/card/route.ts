import { readFileSync } from "fs";
import { join } from "path";

// Serves the NFC contact card at /card/
// Static assets (card.jsx, styles.css, luis.png) are served from public/card/
export async function GET() {
  const html = readFileSync(join(process.cwd(), "public", "card", "index.html"), "utf-8");
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
