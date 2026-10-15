import { amenities, packages } from "@/data/content";
import { site } from "@/lib/site";

export const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: site.description,
  telephone: site.phoneTel,
  image: "/gallery/photo-11.jpg",
  priceRange: `₹${packages[0].price}–₹${packages[packages.length - 1].price} per person`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.place,
    addressRegion: site.region,
    addressCountry: "IN",
  },
  amenityFeature: amenities.map((item) => ({
    "@type": "LocationFeatureSpecification",
    name: item.title,
    value: true,
  })),
};
