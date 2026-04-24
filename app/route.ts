import { readFileSync } from "fs";
import { join } from "path";

// Serve the static HTML website at the root URL
export async function GET() {
  const html = readFileSync(join(process.cwd(), "src", "website.html"), "utf-8");
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
