import { readFile } from "fs/promises";
import path from "path";

const CONTENT_DIR = "content";

export default async function getContent(fileName: string) {
    if (!fileName) {
        throw new Error("Invalid file name. File name cannot be empty.");
    }

    if (fileName.includes("..") || fileName.includes("/")) {
        throw new Error("Invalid file name. Directory traversal is not allowed.");
    }

    if (fileName.startsWith(".")) {
        throw new Error("Invalid file name. Hidden files are not allowed.");
    }

    if (!fileName.endsWith(".md") && !fileName.endsWith(".txt")) {
        throw new Error("Invalid file type. Only .md and .txt files are allowed.");
    }

    const filePath = path.join(process.cwd(), CONTENT_DIR, fileName);
    return await readFile(filePath, "utf8");
}