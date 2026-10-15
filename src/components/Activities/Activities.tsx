"use client";

import { useState } from "react";
import Image from "next/image";
import { activitiesCopy, campActivities, waterActivities } from "@/data/content";
import { activityPhotoFiles } from "@/data/photos";
import type { GalleryImage } from "@/lib/gallery";
import { IconList } from "@/components/IconList/IconList";
import { Lightbox } from "@/components/Lightbox/Lightbox";
import { ListingSection, SectionTitle } from "@/styles/StylesUi";
import { Card, CardText, CardTitle, Cards, Group, GroupTitle, Photo } from "./StylesActivities";

type ActivitiesProps = {
  images: GalleryImage[];
};

export const Activities = ({ images }: ActivitiesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const cards = waterActivities.flatMap((activity) => {
    const photo = images.find((image) => image.file === activityPhotoFiles[activity.title]);
    return photo ? [{ activity, photo }] : [];
  });
  const cardPhotos = cards.map((card) => card.photo);
  const withoutPhoto = waterActivities.filter((activity) => !cards.some((card) => card.activity === activity));

  return (
    <ListingSection id="activities" aria-labelledby="activities-title">
      <SectionTitle id="activities-title">{activitiesCopy.title}</SectionTitle>
      <Group>
        <GroupTitle>{activitiesCopy.waterTitle}</GroupTitle>
        {cards.length > 0 ? (
          <Cards>
            {cards.map(({ activity, photo }, index) => (
              <Card key={activity.title}>
                <Photo type="button" onClick={() => setActiveIndex(index)} aria-label={`Open photo: ${photo.alt}`}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 744px) 46vw, 180px" />
                </Photo>
                <CardTitle>{activity.title}</CardTitle>
                <CardText>{activity.text}</CardText>
              </Card>
            ))}
          </Cards>
        ) : null}
        {withoutPhoto.length > 0 ? <IconList items={withoutPhoto} columns={2} /> : null}
      </Group>
      <Group>
        <GroupTitle>{activitiesCopy.campTitle}</GroupTitle>
        <IconList items={campActivities} columns={2} />
      </Group>
      <Lightbox images={cardPhotos} activeIndex={activeIndex} onChange={setActiveIndex} />
    </ListingSection>
  );
};
