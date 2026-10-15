import { connection } from "next/server";
import { getGallery } from "@/lib/gallery";
import { PhotoTour } from "./PhotoTour";

export const PhotoTourLoader = async () => {
  await connection();
  return <PhotoTour gallery={getGallery()} />;
};
