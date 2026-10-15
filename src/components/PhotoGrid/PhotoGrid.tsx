"use client";

import { useState, type UIEvent } from "react";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";
import { galleryPage } from "@/data/content";
import type { GalleryImage } from "@/lib/gallery";
import { Lightbox } from "@/components/Lightbox/Lightbox";
import { Carousel, Mosaic, ShowAll, Slide, SlideCount, Tile, Wrap } from "./StylesPhotoGrid";

type PhotoGridProps = {
  featured: GalleryImage[];
  images: GalleryImage[];
};

export const PhotoGrid = ({ featured, images }: PhotoGridProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const ordered = [...featured, ...images.filter((image) => !featured.includes(image))];

  const handleOpen = (image: GalleryImage) => {
    const index = ordered.findIndex((item) => item.src === image.src);
    setActiveIndex(index === -1 ? 0 : index);
  };

  const handleCarouselScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth } = event.currentTarget;
    if (clientWidth > 0) setSlideIndex(Math.round(scrollLeft / clientWidth));
  };

  if (images.length === 0) return null;

  return (
    <Wrap id="photos" aria-label="Photos">
      <Mosaic>
        {featured.map((image, index) => (
          <Tile key={image.src} type="button" $main={index === 0} onClick={() => handleOpen(image)} aria-label={`Open photo: ${image.alt}`}>
            <Image src={image.src} alt={image.alt} fill priority={index === 0} sizes={index === 0 ? "(max-width: 1120px) 50vw, 560px" : "(max-width: 1120px) 25vw, 280px"} />
          </Tile>
        ))}
      </Mosaic>
      <Carousel onScroll={handleCarouselScroll} aria-label="Swipe through photos">
        {ordered.map((image, index) => (
          <Slide key={image.src} type="button" onClick={() => setActiveIndex(index)} aria-label={`Open photo ${index + 1} of ${ordered.length}: ${image.alt}`}>
            <Image src={image.src} alt={image.alt} fill priority={index === 0} sizes="100vw" />
          </Slide>
        ))}
      </Carousel>
      <SlideCount aria-hidden="true">
        {slideIndex + 1} / {images.length}
      </SlideCount>
      <ShowAll href="/gallery">
        <LayoutGrid size={16} aria-hidden="true" />
        {galleryPage.showAll(images.length)}
      </ShowAll>
      <Lightbox images={ordered} activeIndex={activeIndex} onChange={setActiveIndex} />
    </Wrap>
  );
};
