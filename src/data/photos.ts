export type PhotoCategoryId = "cottages" | "pool" | "rooms" | "dining" | "activities" | "night" | "more";

export type PhotoCategory = {
  id: PhotoCategoryId;
  label: string;
};

export const photoCategories: PhotoCategory[] = [
  { id: "cottages", label: "Cottages & grounds" },
  { id: "pool", label: "Swimming pool" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "activities", label: "Activities" },
  { id: "night", label: "Evenings" },
  { id: "more", label: "More photos" },
];

type PhotoDetails = {
  category: PhotoCategoryId;
  alt: string;
};

// Files in public/gallery that are not listed here still appear, under "More photos".
export const photoDetails: Record<string, PhotoDetails> = {
  "photo-01.jpg": { category: "activities", alt: "Guest on the river zipline over the water" },
  "photo-02.jpg": { category: "activities", alt: "River rafting through rapids on the Kali River" },
  "photo-03.jpg": { category: "activities", alt: "Kayaking on calm green water" },
  "photo-04.jpg": { category: "activities", alt: "Group boating in life jackets" },
  "photo-05.jpg": { category: "cottages", alt: "Blue cottages among coconut palms" },
  "photo-06.jpg": { category: "cottages", alt: "Stone pathway across the lawn" },
  "photo-07.jpg": { category: "cottages", alt: "Row of cottages with forest behind" },
  "photo-08.jpg": { category: "night", alt: "Cottages lit up at night, reflected in the pool" },
  "photo-09.jpg": { category: "cottages", alt: "Open-sided hall with hills behind" },
  "photo-10.jpg": { category: "night", alt: "Outdoor seating area with string lights at night" },
  "photo-11.jpg": { category: "pool", alt: "Swimming pool in front of the cottages at dusk" },
  "photo-12.jpg": { category: "night", alt: "Cottages and garden lights after dark" },
  "photo-13.jpg": { category: "cottages", alt: "Cottage with a veranda under a cloudy sky" },
  "photo-14.jpg": { category: "rooms", alt: "Room with two double beds and wooden floor" },
  "photo-15.jpg": { category: "cottages", alt: "View of hills and forest around the property" },
  "photo-16.jpg": { category: "cottages", alt: "Entrance pavilion with lights along the path" },
  "photo-17.jpg": { category: "night", alt: "Cottage verandas lit at night" },
  "photo-18.jpg": { category: "rooms", alt: "Dormitory-style room with several beds for groups" },
  "photo-19.jpg": { category: "night", alt: "Cottage with lit path lights in the evening" },
  "photo-20.jpg": { category: "pool", alt: "Swimming pool lit up at night" },
  "photo-21.jpg": { category: "activities", alt: "Rain dance area with lights and water sprays" },
  "photo-22.jpg": { category: "rooms", alt: "Room with a double bed, chairs and curtains" },
  "photo-23.jpg": { category: "pool", alt: "Swimming pool with palm trees in the morning" },
  "photo-24.jpg": { category: "night", alt: "Cottages glowing at night along the lit path" },
  "photo-25.jpg": { category: "dining", alt: "Buffet counter against a brick wall" },
  "photo-26.jpg": { category: "dining", alt: "Open-air dining hall with tables and chairs" },
  "photo-27.jpg": { category: "dining", alt: "Buffet dishes laid out for a meal" },
  "photo-28.jpg": { category: "rooms", alt: "Room with two beds and a wooden wardrobe" },
};

export const activityPhotoFiles: Record<string, string> = {
  Kayaking: "photo-03.jpg",
  Boating: "photo-04.jpg",
  "River zipline": "photo-01.jpg",
  "Short rafting": "photo-02.jpg",
};

export const diningPhotoFile = "photo-26.jpg";

export const featuredPhotos = ["photo-11.jpg", "photo-07.jpg", "photo-23.jpg", "photo-14.jpg", "photo-08.jpg"];
