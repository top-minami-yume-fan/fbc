import fs from "fs";
import path from "path";

export function getMarkdownContent(markdownFileName: string) {
    const fullPath = path.join(process.cwd(), `content/${markdownFileName}`);
    return fs.readFileSync(fullPath, "utf8");
}