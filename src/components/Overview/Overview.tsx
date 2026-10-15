"use client";

import { highlights, listing, packages } from "@/data/content";
import { formatRupees } from "@/lib/site";
import { IconList } from "@/components/IconList/IconList";
import { ListingSection, SectionHeader, SectionTitle } from "@/styles/StylesUi";
import { Badge, Badges, Facts, Intro, Quote } from "./StylesOverview";

export const Overview = () => (
  <>
    <ListingSection aria-labelledby="overview-title">
      <SectionHeader>
        <SectionTitle id="overview-title">{listing.overviewTitle}</SectionTitle>
        <Facts>{listing.overviewFacts.join(" · ")}</Facts>
      </SectionHeader>
      <Badges>
        {packages.map((stayPackage) => (
          <Badge key={stayPackage.id} href="#packages">
            <strong>{formatRupees(stayPackage.price)}</strong>
            <span>
              {stayPackage.name} · per person
            </span>
          </Badge>
        ))}
      </Badges>
    </ListingSection>
    <ListingSection aria-label="Highlights">
      <IconList items={highlights} columns={1} iconSize={28} />
    </ListingSection>
    <ListingSection aria-labelledby="about-title">
      <SectionTitle id="about-title">{listing.tagline}</SectionTitle>
      <Intro>
        {listing.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Intro>
      <Quote>“{listing.quote}”</Quote>
    </ListingSection>
  </>
);
