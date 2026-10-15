"use client";

import { useState } from "react";
import { Check, MapPin, Share } from "lucide-react";
import { listing } from "@/data/content";
import { site } from "@/lib/site";
import { Heading, MapLink, Meta, ShareButton, Tags, Wrap } from "./StylesListingTitle";

export const ListingTitle = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: site.name, text: listing.tagline, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <Wrap>
      <div>
        <Heading>{listing.title}</Heading>
        <Meta>
          <MapPin size={16} aria-hidden="true" />
          <MapLink href="#location">{site.location}</MapLink>
        </Meta>
        <Tags>{listing.meta.join(" · ")}</Tags>
      </div>
      <ShareButton type="button" onClick={handleShare} aria-live="polite">
        {isCopied ? <Check size={16} aria-hidden="true" /> : <Share size={16} aria-hidden="true" />}
        {isCopied ? "Link copied" : "Share"}
      </ShareButton>
    </Wrap>
  );
};
