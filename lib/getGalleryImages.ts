import fs from "fs";
import path from "path";

export function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public/images/gallery");

  const files = fs.readdirSync(galleryDir);

  return files.map((file) => ({
    src: `/images/gallery/${file}`,
    alt: file.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
  }));
}