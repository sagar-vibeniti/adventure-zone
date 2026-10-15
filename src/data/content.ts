import {
  BedDouble,
  Binoculars,
  Cable,
  Car,
  CircleDot,
  CloudRain,
  Dices,
  Flame,
  Footprints,
  Gamepad2,
  Landmark,
  Leaf,
  MessageCircle,
  Mountain,
  Music,
  Plane,
  Sailboat,
  Ship,
  Sofa,
  Tag,
  Target,
  TrainFront,
  Trees,
  Users,
  Utensils,
  Volleyball,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  text?: string;
};

export type StayPackage = {
  id: string;
  name: string;
  label: string;
  price: number;
  includes: string[];
};

export const MIN_GUESTS = 1;
export const MAX_GUESTS = 40;

const guestWord = (count: number) => (count === 1 ? "guest" : "guests");

export const navItems = [
  { label: "Photos", href: "#photos" },
  { label: "Amenities", href: "#amenities" },
  { label: "Packages", href: "#packages" },
  { label: "Activities", href: "#activities" },
  { label: "Location", href: "#location" },
] as const;

export const listing = {
  title: "Adventure Zone — jungle cottage stay in Dandeli",
  meta: ["Cottages", "Swimming pool", "Meals included", "Adventure packages"],
  overviewTitle: "Cottage stay with pool and river adventures",
  overviewFacts: ["Stay + food in every package", `Minimum ${MIN_GUESTS} ${guestWord(MIN_GUESTS)}`, "Family, friends & couples"],
  tagline: "Away from the city rush, in nature’s lap.",
  intro: [
    "Welcome to Adventure Zone — your own private paradise in Dandeli. We offer peace and quiet, beautiful views and heartfelt hospitality. Whether it is a weekend with family or a relaxing holiday with friends, our homestay gives you the comfort of home and a stay you will remember.",
    "Spend the day on the water with kayaking, boating and zorbing, add the river zipline or rafting, then come back to the pool, a home-style meal and a campfire under the trees.",
  ],
  quote: "The comfort of home, the magic of a resort.",
};

export const highlights: IconItem[] = [
  {
    icon: Waves,
    title: "Adventure is part of the stay",
    text: "Kayaking, boating and zorbing come with every package.",
  },
  {
    icon: Utensils,
    title: "Fresh, home-style food",
    text: "Meals are included, served buffet-style in the open dining hall.",
  },
  {
    icon: Flame,
    title: "Evenings by the pool",
    text: "Swimming pool, rain dance and a campfire once it gets dark.",
  },
];

export const amenities: IconItem[] = [
  { icon: Waves, title: "Swimming pool" },
  { icon: Utensils, title: "Meals included" },
  { icon: BedDouble, title: "Comfortable rooms" },
  { icon: Wifi, title: "High-speed Wi-Fi" },
  { icon: Car, title: "Free parking on premises" },
  { icon: Sofa, title: "Outdoor seating" },
  { icon: Flame, title: "Campfire at night" },
  { icon: CloudRain, title: "Rain dance" },
  { icon: Gamepad2, title: "Indoor games" },
  { icon: Trees, title: "Forest and hill views" },
];

const basicIncludes = ["Stay", "Food", "Indoor activities", "Kayaking", "Boating", "Zorbing"];

export const packages: StayPackage[] = [
  {
    id: "package-1",
    name: "Package 1",
    label: "Stay & play",
    price: 1400,
    includes: basicIncludes,
  },
  {
    id: "package-2",
    name: "Package 2",
    label: "Add the zipline",
    price: 1600,
    includes: [...basicIncludes, "River zipline"],
  },
  {
    id: "package-3",
    name: "Package 3",
    label: "Full adventure",
    price: 2000,
    includes: [...basicIncludes, "River zipline", "Short rafting"],
  },
];

export const packagesCopy = {
  title: "Choose your package",
  lead: `Prices are per person. Each package needs a minimum of ${MIN_GUESTS} ${guestWord(MIN_GUESTS)}.`,
  select: "Select",
  selected: "Selected",
  rateCard: "View the rate card",
};

export const waterActivities: IconItem[] = [
  { icon: Sailboat, title: "Kayaking", text: "All packages" },
  { icon: Ship, title: "Boating", text: "All packages" },
  { icon: CircleDot, title: "Zorbing", text: "All packages" },
  { icon: Cable, title: "River zipline", text: "Packages 2 & 3" },
  { icon: Waves, title: "Short rafting", text: "Package 3" },
];

export const campActivities: IconItem[] = [
  { icon: Waves, title: "Swimming pool" },
  { icon: CloudRain, title: "Rain dance" },
  { icon: Flame, title: "Campfire (night)" },
  { icon: Volleyball, title: "Pool volleyball" },
  { icon: Music, title: "Soft music" },
  { icon: Target, title: "Dart board" },
  { icon: Dices, title: "Carrom" },
  { icon: Footprints, title: "Morning nature walk" },
];

export const activitiesCopy = {
  title: "Things to do",
  waterTitle: "On the river",
  campTitle: "At the resort",
};

export const dining = {
  title: "Food & dining",
  text: "Fresh, home-style meals are part of every package. Food is served buffet-style in our open-air dining hall, looking out over the cottages. Let us know about any dietary needs when you book.",
};

export const sightseeing: IconItem[] = [
  { icon: Binoculars, title: "Crocodile Park" },
  { icon: Trees, title: "Moulangi Eco Park" },
  { icon: Leaf, title: "Dandakaranya Eco Park" },
  { icon: Waves, title: "Supa backwaters" },
  { icon: Landmark, title: "Supa Dam viewpoint" },
  { icon: Mountain, title: "Kali River view" },
];

export const sightseeingCopy = {
  title: "Sightseeing nearby",
  lead: "Popular Dandeli spots our guests visit. Ask us for directions and timings.",
};

export const locationCopy = {
  title: "Where you’ll be",
  place: "Dandeli, Karnataka, India",
  text: "Dandeli sits in the forests of the Western Ghats, along the Kali River. We share the exact location and directions once your booking is confirmed.",
  ways: [
    { icon: Plane, title: "By air", text: "Hubballi Airport is the closest. Goa is another option." },
    { icon: TrainFront, title: "By train", text: "Alnavar is the nearest station; Hubballi and Dharwad are larger junctions." },
    { icon: Car, title: "By road", text: "Drive in through Uttara Kannada. Free parking at the resort." },
  ] satisfies IconItem[],
  mapCta: "Open in Google Maps",
};

export const thingsToKnow: IconItem[] = [
  { icon: Users, title: "Group bookings", text: `Packages are priced per person, minimum ${MIN_GUESTS} ${guestWord(MIN_GUESTS)}.` },
  { icon: Tag, title: "Launch offer", text: "Special discount on the first 10 bookings — ask when you enquire." },
  { icon: MessageCircle, title: "How booking works", text: "Send your dates on WhatsApp or call. We confirm availability and the final price directly." },
];

export const bookingCopy = {
  perPerson: "/ person",
  offer: "Special discount on the first 10 bookings",
  checkIn: "Check-in",
  checkOut: "Checkout",
  guests: "Guests",
  package: "Package",
  addDate: "Add date",
  reserve: "Reserve on WhatsApp",
  notCharged: "You won’t be charged yet",
  total: "Estimated total",
  discountNote: "Launch discount is applied when we confirm.",
  or: "or call",
  datesError: "Checkout must be after check-in.",
  popupFallback: "WhatsApp didn’t open?",
  popupLink: "Tap here",
  mobileReserve: "Reserve",
  from: "From",
};

export const footer = {
  taglines: ["Where nature meets comfort.", "A short break from your busy life.", "Your home away from home, right in nature’s lap."],
  rights: "© 2026 Adventure Zone · Dandeli, Karnataka",
};

export const galleryPage = {
  title: "Photo tour",
  back: "Back to Adventure Zone",
  showAll: (count: number) => `Show all ${count} photos`,
  empty: "Add photos to the public/gallery folder and refresh this page.",
};

export const notFoundCopy = {
  title: "We can’t find that page",
  text: "The link may be broken, but the jungle is still here.",
  home: "Go to Adventure Zone",
};
