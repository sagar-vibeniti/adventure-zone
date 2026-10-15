"use client";

import { ExternalLink } from "lucide-react";
import { locationCopy } from "@/data/content";
import { site } from "@/lib/site";
import { IconList } from "@/components/IconList/IconList";
import { ListingSection, SectionTitle } from "@/styles/StylesUi";
import { MapFrame, MapLink, Place, Text } from "./StylesLocation";

export const Location = () => (
  <ListingSection id="location" aria-labelledby="location-title">
    <SectionTitle id="location-title">{locationCopy.title}</SectionTitle>
    <MapFrame>
      <iframe title="Map of Dandeli, Karnataka" src={site.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </MapFrame>
    <div>
      <Place>{locationCopy.place}</Place>
      <Text>{locationCopy.text}</Text>
    </div>
    <IconList items={locationCopy.ways} columns={1} />
    <MapLink href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
      {locationCopy.mapCta}
      <ExternalLink size={16} aria-hidden="true" />
    </MapLink>
  </ListingSection>
);
