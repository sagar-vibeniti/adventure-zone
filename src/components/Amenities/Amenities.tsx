"use client";

import { amenities } from "@/data/content";
import { IconList } from "@/components/IconList/IconList";
import { ListingSection, SectionTitle } from "@/styles/StylesUi";

export const Amenities = () => (
  <ListingSection id="amenities" aria-labelledby="amenities-title">
    <SectionTitle id="amenities-title">What this place offers</SectionTitle>
    <IconList items={amenities} columns={2} />
  </ListingSection>
);
