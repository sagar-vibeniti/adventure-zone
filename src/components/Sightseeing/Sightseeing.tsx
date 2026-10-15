"use client";

import { sightseeing, sightseeingCopy } from "@/data/content";
import { IconList } from "@/components/IconList/IconList";
import { ListingSection, SectionHeader, SectionLead, SectionTitle } from "@/styles/StylesUi";

export const Sightseeing = () => (
  <ListingSection aria-labelledby="sightseeing-title">
    <SectionHeader>
      <SectionTitle id="sightseeing-title">{sightseeingCopy.title}</SectionTitle>
      <SectionLead>{sightseeingCopy.lead}</SectionLead>
    </SectionHeader>
    <IconList items={sightseeing} columns={2} />
  </ListingSection>
);
