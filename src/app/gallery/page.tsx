import type { Metadata } from "next";
import { Suspense } from "react";
import { PhotoTourLoader } from "@/components/PhotoTour/PhotoTourLoader";
import { PageSkeleton } from "@/components/Skeleton/PageSkeleton";

export const metadata: Metadata = {
  title: "Photo tour",
  description: "Photos of Adventure Zone in Dandeli: cottages, rooms, swimming pool, dining hall, river activities and evenings at the resort.",
};

export default function GalleryPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <PhotoTourLoader />
    </Suspense>
  );
}
