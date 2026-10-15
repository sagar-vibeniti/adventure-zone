import { Suspense } from "react";
import { ListingLoader } from "@/components/Listing/ListingLoader";
import { PageSkeleton } from "@/components/Skeleton/PageSkeleton";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<PageSkeleton />}>
        <ListingLoader />
      </Suspense>
    </main>
  );
}
