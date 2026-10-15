"use client";

import { useState } from "react";
import { MIN_GUESTS, packages, type StayPackage } from "@/data/content";
import { diningPhotoFile } from "@/data/photos";
import type { GalleryData } from "@/lib/gallery";
import { Activities } from "@/components/Activities/Activities";
import { Amenities } from "@/components/Amenities/Amenities";
import { BookingCard } from "@/components/BookingCard/BookingCard";
import { Dining } from "@/components/Dining/Dining";
import { ListingTitle } from "@/components/ListingTitle/ListingTitle";
import { Location } from "@/components/Location/Location";
import { MobileReserveBar } from "@/components/MobileReserveBar/MobileReserveBar";
import { Overview } from "@/components/Overview/Overview";
import { Packages } from "@/components/Packages/Packages";
import { PhotoGrid } from "@/components/PhotoGrid/PhotoGrid";
import { Sightseeing } from "@/components/Sightseeing/Sightseeing";
import { ThingsToKnow } from "@/components/ThingsToKnow/ThingsToKnow";
import { Container } from "@/styles/StylesUi";
import { Body, Main, Top } from "./StylesListing";

type ListingProps = {
  gallery: GalleryData;
};

export const Listing = ({ gallery }: ListingProps) => {
  const [selected, setSelected] = useState<StayPackage>(packages[0]);
  const [guests, setGuests] = useState(MIN_GUESTS);
  const diningPhoto = gallery.images.find((image) => image.file === diningPhotoFile);

  return (
    <Container>
      <Top>
        <ListingTitle />
        <PhotoGrid featured={gallery.featured} images={gallery.images} />
      </Top>
      <Body>
        <Main>
          <Overview />
          <Amenities />
          <Packages selectedId={selected.id} onSelect={setSelected} />
          <Activities images={gallery.images} />
          <Dining photo={diningPhoto} />
          <Sightseeing />
          <Location />
          <ThingsToKnow />
        </Main>
        <BookingCard selected={selected} guests={guests} onPackageChange={setSelected} onGuestsChange={setGuests} />
      </Body>
      <MobileReserveBar selected={selected} guests={guests} />
    </Container>
  );
};
