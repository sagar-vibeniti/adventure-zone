"use client";

import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent, type TouchEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import { Caption, Counter, Frame, IconButton, ImageBox, NavButton, Spacer, Stage, TopBar } from "./StylesLightbox";

const SWIPE_DISTANCE = 50;
const subscribe = () => () => {};
const isClientSnapshot = () => true;
const isServerSnapshot = () => false;

type LightboxProps = {
  images: GalleryImage[];
  activeIndex: number | null;
  onChange: (index: number | null) => void;
};

export const Lightbox = ({ images, activeIndex, onChange }: LightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isClient = useSyncExternalStore(subscribe, isClientSnapshot, isServerSnapshot);
  const active = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeIndex === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [activeIndex, isClient]);

  const showStep = (step: number) => {
    if (activeIndex === null || images.length === 0) return;
    onChange((activeIndex + step + images.length) % images.length);
  };

  const handleClose = () => onChange(null);
  const handleNext = () => showStep(1);
  const handlePrev = () => showStep(-1);

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrev();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    touchStartX.current = null;
    if (distance <= -SWIPE_DISTANCE) handleNext();
    if (distance >= SWIPE_DISTANCE) handlePrev();
  };

  if (!isClient) return null;

  return createPortal(
    <Frame ref={dialogRef} aria-label="Photo viewer" onClose={handleClose} onKeyDown={handleKeyDown}>
      {active && activeIndex !== null ? (
        <>
          <TopBar>
            <IconButton type="button" onClick={handleClose} aria-label="Close photo viewer">
              <X size={18} aria-hidden="true" />
              Close
            </IconButton>
            <Counter aria-live="polite">
              {activeIndex + 1} / {images.length}
            </Counter>
            <Spacer aria-hidden="true" />
          </TopBar>
          <Stage onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <NavButton type="button" onClick={handlePrev} aria-label="Previous photo">
              <ChevronLeft size={22} aria-hidden="true" />
            </NavButton>
            <ImageBox>
              <Image key={active.src} src={active.src} alt={active.alt} fill sizes="(max-width: 1100px) 100vw, 1080px" style={{ objectFit: "contain" }} />
            </ImageBox>
            <NavButton type="button" onClick={handleNext} aria-label="Next photo">
              <ChevronRight size={22} aria-hidden="true" />
            </NavButton>
          </Stage>
          <Caption>{active.alt}</Caption>
        </>
      ) : null}
    </Frame>,
    document.body,
  );
};
