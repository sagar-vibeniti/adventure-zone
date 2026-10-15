export const site = {
  name: "Adventure Zone",
  location: "Dandeli, Karnataka",
  place: "Dandeli",
  region: "Karnataka",
  phoneDisplay: "+91 88615 58952",
  phoneTel: "+918861558952",
  whatsappNumber: "918861558952",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dandeli%2C%20Karnataka",
  mapsEmbedUrl: "https://www.google.com/maps?q=Dandeli,Karnataka&z=12&output=embed",
  description:
    "Jungle cottage stay in Dandeli, Karnataka with a swimming pool, meals, kayaking, boating, zorbing, river zipline and rafting packages from ₹1,400 per person.",
} as const;

export const defaultEnquiry =
  "Hello Adventure Zone, I would like to know about availability and packages for a stay in Dandeli.";

export const whatsappLink = (message: string = defaultEnquiry) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
