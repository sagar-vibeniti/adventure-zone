import fs from "fs";
import path from "path";
import sizeOf from "image-size";
import { featuredPhotos, photoCategories, photoDetails, type PhotoCategoryId } from "@/data/photos";

const IMAGE_FILE = /\.(jpe?g|png|webp|avif)$/i;

export type GalleryImage = {
  file: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: PhotoCategoryId;
};

export type GallerySection = {
  id: PhotoCategoryId;
  label: string;
  images: GalleryImage[];
};

export type GalleryData = {
  images: GalleryImage[];
  featured: GalleryImage[];
  sections: GallerySection[];
};

const readGalleryFolder = (): GalleryImage[] => {
  const directory = path.join(process.cwd(), "public", "gallery");
  if (!fs.existsSync(directory)) return [];

  const files = fs
    .readdirSync(directory)
    .filter((file) => IMAGE_FILE.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return files.flatMap((file, index) => {
    try {
      const { width, height } = sizeOf(path.join(directory, file));
      if (!width || !height) return [];
      const details = photoDetails[file];

      return [
        {
          file,
          src: `/gallery/${encodeURIComponent(file)}`,
          alt: details?.alt ?? `Adventure Zone, Dandeli — photo ${index + 1}`,
          width,
          height,
          category: details?.category ?? "more",
        },
      ];
    } catch {
      return [];
    }
  });
};

export const getGallery = (): GalleryData => {
  const all = readGalleryFolder();

  const sections = photoCategories
    .map((category) => ({
      id: category.id,
      label: category.label,
      images: all.filter((image) => image.category === category.id),
    }))
    .filter((section) => section.images.length > 0);

  const images = sections.flatMap((section) => section.images);

  const picked = featuredPhotos
    .map((file) => images.find((image) => image.file === file))
    .filter((image): image is GalleryImage => Boolean(image));
  const featured = [...picked, ...images.filter((image) => !picked.includes(image))].slice(0, 5);

  return { images, featured, sections };
};
