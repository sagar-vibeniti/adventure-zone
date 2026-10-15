import { connection } from "next/server";
import { getGallery } from "@/lib/gallery";
import { Listing } from "./Listing";

export const ListingLoader = async () => {
  await connection();
  return <Listing gallery={getGallery()} />;
};
