"use client";

import { Check, FileImage } from "lucide-react";
import { packages, packagesCopy, type StayPackage } from "@/data/content";
import { formatRupees } from "@/lib/site";
import { Button, ListingSection, SectionHeader, SectionLead, SectionTitle } from "@/styles/StylesUi";
import { Card, CardTop, Extra, Grid, Includes, Label, Name, Price, RateCard } from "./StylesPackages";

type PackagesProps = {
  selectedId: string;
  onSelect: (stayPackage: StayPackage) => void;
};

export const Packages = ({ selectedId, onSelect }: PackagesProps) => (
  <ListingSection id="packages" aria-labelledby="packages-title">
    <SectionHeader>
      <SectionTitle id="packages-title">{packagesCopy.title}</SectionTitle>
      <SectionLead>{packagesCopy.lead}</SectionLead>
    </SectionHeader>
    <Grid>
      {packages.map((stayPackage, index) => {
        const isSelected = stayPackage.id === selectedId;
        const previousIncludes = index === 0 ? [] : packages[index - 1].includes;

        return (
          <Card key={stayPackage.id} $selected={isSelected} aria-labelledby={`${stayPackage.id}-label`}>
            <CardTop>
              <Name>{stayPackage.name}</Name>
              <Label id={`${stayPackage.id}-label`}>{stayPackage.label}</Label>
              <Price>
                <strong>{formatRupees(stayPackage.price)}</strong> <span>/ person</span>
              </Price>
            </CardTop>
            <Includes>
              {stayPackage.includes.map((item) => (
                <li key={item}>
                  <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                  {index > 0 && !previousIncludes.includes(item) ? <Extra>{item}</Extra> : item}
                </li>
              ))}
            </Includes>
            <Button
              type="button"
              $tone={isSelected ? "dark" : "outline"}
              $full
              onClick={() => onSelect(stayPackage)}
              aria-pressed={isSelected}
            >
              {isSelected ? (
                <>
                  <Check size={16} aria-hidden="true" />
                  {packagesCopy.selected}
                </>
              ) : (
                packagesCopy.select
              )}
            </Button>
          </Card>
        );
      })}
    </Grid>
    <RateCard href="/brand/rate-card.jpg" target="_blank" rel="noopener noreferrer">
      <FileImage size={18} aria-hidden="true" />
      {packagesCopy.rateCard}
    </RateCard>
  </ListingSection>
);
