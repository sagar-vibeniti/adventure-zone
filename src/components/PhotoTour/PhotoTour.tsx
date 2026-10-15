"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { galleryPage } from "@/data/content";
import type { GalleryData, GalleryImage } from "@/lib/gallery";
import { Lightbox } from "@/components/Lightbox/Lightbox";
import { Container } from "@/styles/StylesUi";
import { BackLink, Count, Empty, Grid, Heading, Page, Photo, Section, SectionHeading, Thumb, ThumbImage, Thumbs } from "./StylesPhotoTour";

type PhotoTourProps = {
  gallery: GalleryData;
};

export const PhotoTour = ({ gallery }: PhotoTourProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { images, sections } = gallery;

  const handleOpen = (image: GalleryImage) => {
    setActiveIndex(images.findIndex((item) => item.src === image.src));
  };

  return (
    <Page>
      <Container>
        <BackLink href="/">
          <ArrowLeft size={18} aria-hidden="true" />
          {galleryPage.back}
        </BackLink>
        <Heading>{galleryPage.title}</Heading>
        <Count>{images.length} photos</Count>
        {images.length === 0 ? <Empty>{galleryPage.empty}</Empty> : null}
        {sections.length > 1 ? (
          <Thumbs aria-label="Photo categories">
            {sections.map((section) => (
              <Thumb key={section.id} href={`#${section.id}`}>
                <ThumbImage>
                  <Image src={section.images[0].src} alt="" fill sizes="160px" />
                </ThumbImage>
                {section.label}
              </Thumb>
            ))}
          </Thumbs>
        ) : null}
        {sections.map((section) => (
          <Section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <SectionHeading id={`${section.id}-title`}>
              {section.label}
              <span>{section.images.length} photos</span>
            </SectionHeading>
            <Grid>
              {section.images.map((image, index) => (
                <Photo key={image.src} type="button" $wide={index % 3 === 0} onClick={() => handleOpen(image)} aria-label={`Open photo: ${image.alt}`}>
                  <Image src={image.src} alt={image.alt} fill sizes={index % 3 === 0 ? "(max-width: 950px) 100vw, 800px" : "(max-width: 950px) 50vw, 400px"} />
                </Photo>
              ))}
            </Grid>
          </Section>
        ))}
      </Container>
      <Lightbox images={images} activeIndex={activeIndex} onChange={setActiveIndex} />
    </Page>
  );
};
