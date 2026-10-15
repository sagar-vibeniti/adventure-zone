"use client";

import { thingsToKnow } from "@/data/content";
import { IconList } from "@/components/IconList/IconList";
import { ListingSection, SectionTitle } from "@/styles/StylesUi";

export const ThingsToKnow = () => (
  <ListingSection aria-labelledby="know-title">
    <SectionTitle id="know-title">Things to know</SectionTitle>
    <IconList items={thingsToKnow} columns={3} />
  </ListingSection>
);
