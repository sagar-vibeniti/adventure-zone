"use client";

import Image from "next/image";
import { Salad, Trees, Utensils } from "lucide-react";
import { dining } from "@/data/content";
import type { GalleryImage } from "@/lib/gallery";
import { ListingSection, SectionTitle } from "@/styles/StylesUi";
import { Copy, Layout, Photo, Tags } from "./StylesDining";

type DiningProps = {
  photo?: GalleryImage;
};

const diningTags = [
  { icon: Utensils, label: "Included in every package" },
  { icon: Salad, label: "Buffet service" },
  { icon: Trees, label: "Open-air dining hall" },
];

export const Dining = ({ photo }: DiningProps) => (
  <ListingSection aria-labelledby="dining-title">
    <SectionTitle id="dining-title">{dining.title}</SectionTitle>
    <Layout>
      {photo ? (
        <Photo>
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 744px) 100vw, 320px" />
        </Photo>
      ) : null}
      <Copy>
        <p>{dining.text}</p>
        <Tags>
          {diningTags.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={16} aria-hidden="true" />
              {label}
            </li>
          ))}
        </Tags>
      </Copy>
    </Layout>
  </ListingSection>
);
