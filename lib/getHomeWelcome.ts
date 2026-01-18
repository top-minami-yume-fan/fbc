import fs from "fs";
import path from "path";

export function getHomeWelcome() {
  const filePath = path.join(process.cwd(), "content/welcome.md");
  return fs.readFileSync(filePath, "utf-8");
}
