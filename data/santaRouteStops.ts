export interface SantaStop {
  id: string;
  name: string;
  region: string;
  flag: string;
  utcOffset: number;
  lat: number;
  lng: number;
  dwellMinutes: number;
  funFact: string;
  milestoneType: "start" | "major" | "uk" | "end";
  displayLabel: string;
}

export const TRACKER_CONSTANTS = {
  totalEstimatedGifts: 2_500_000_000,
  totalEstimatedDistanceKm: 510_000_000,
  ukSpecialWindowHours: 2,
  defaultDwellFraction: 0.6,
  journeyStartUtcHour: 10,
  journeyEndUtcHour: 34,
} as const;

export const santaStops: SantaStop[] = [
  {
    id: "pacific",
    name: "Pacific Islands",
    region: "Pacific",
    flag: "🌏",
    utcOffset: 14,
    lat: 1.9,
    lng: -157.5,
    dwellMinutes: 60,
    funFact:
      "Kiribati's Line Islands are the first place on Earth to welcome Christmas Day — celebrations begin with community feasts and traditional dancing.",
    milestoneType: "start",
    displayLabel: "Pacific Kickoff",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    region: "Oceania",
    flag: "🇳🇿",
    utcOffset: 12,
    lat: -41.3,
    lng: 174.8,
    dwellMinutes: 45,
    funFact:
      "New Zealanders celebrate Christmas in summer! Many families head to the beach for a BBQ on Christmas Day — pavlova is the traditional dessert.",
    milestoneType: "major",
    displayLabel: "New Zealand",
  },
  {
    id: "australia",
    name: "Eastern Australia",
    region: "Oceania",
    flag: "🇦🇺",
    utcOffset: 11,
    lat: -33.9,
    lng: 151.2,
    dwellMinutes: 50,
    funFact:
      "Australians enjoy Christmas in temperatures above 30°C. Many families celebrate with seafood on the beach, and Carols by Candlelight is a beloved tradition.",
    milestoneType: "major",
    displayLabel: "Australia",
  },
  {
    id: "japan",
    name: "Japan & South Korea",
    region: "East Asia",
    flag: "🇯🇵",
    utcOffset: 9,
    lat: 35.7,
    lng: 139.7,
    dwellMinutes: 45,
    funFact:
      "In Japan, eating KFC on Christmas Eve is a hugely popular tradition — over 3.6 million families order their festive bucket every year.",
    milestoneType: "major",
    displayLabel: "Japan & Korea",
  },
  {
    id: "china",
    name: "China, Hong Kong & Singapore",
    region: "East Asia",
    flag: "🇭🇰",
    utcOffset: 8,
    lat: 22.3,
    lng: 114.2,
    dwellMinutes: 40,
    funFact:
      "In Hong Kong, the skyline lights up with spectacular Christmas displays. Victoria Harbour hosts one of Asia's largest festive light shows.",
    milestoneType: "major",
    displayLabel: "China & SE Asia",
  },
  {
    id: "india",
    name: "India",
    region: "South Asia",
    flag: "🇮🇳",
    utcOffset: 5.5,
    lat: 28.6,
    lng: 77.2,
    dwellMinutes: 50,
    funFact:
      "In India, Christmas is called 'Bada Din' (Big Day). Families decorate banana and mango trees with lights, and midnight mass is a major event in Goa.",
    milestoneType: "major",
    displayLabel: "India",
  },
  {
    id: "middle-east",
    name: "UAE & Middle East",
    region: "Middle East",
    flag: "🇦🇪",
    utcOffset: 4,
    lat: 25.2,
    lng: 55.3,
    dwellMinutes: 40,
    funFact:
      "Dubai sets world records for Christmas decorations each year — including some of the tallest Christmas trees ever built, towering over 40 metres.",
    milestoneType: "major",
    displayLabel: "Middle East",
  },
  {
    id: "east-africa",
    name: "East Africa",
    region: "Africa",
    flag: "🇰🇪",
    utcOffset: 3,
    lat: -1.3,
    lng: 36.8,
    dwellMinutes: 35,
    funFact:
      "In Kenya, families celebrate Christmas with nyama choma (grilled meat) and community gatherings. Children receive new clothes as their main gift.",
    milestoneType: "major",
    displayLabel: "East Africa",
  },
  {
    id: "eastern-europe",
    name: "Eastern Europe",
    region: "Europe",
    flag: "🇵🇱",
    utcOffset: 2,
    lat: 52.2,
    lng: 21.0,
    dwellMinutes: 35,
    funFact:
      "In Poland, an extra place is always set at the Christmas Eve table for an unexpected guest — a tradition symbolising hospitality and remembrance.",
    milestoneType: "major",
    displayLabel: "Eastern Europe",
  },
  {
    id: "central-europe",
    name: "Central Europe",
    region: "Europe",
    flag: "🇩🇪",
    utcOffset: 1,
    lat: 48.9,
    lng: 2.3,
    dwellMinutes: 35,
    funFact:
      "Germany is the birthplace of the Christmas tree tradition. Families decorate their tree on Christmas Eve and exchange gifts under its branches.",
    milestoneType: "major",
    displayLabel: "Central Europe",
  },
  {
    id: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    utcOffset: 0,
    lat: 51.5,
    lng: -0.1,
    dwellMinutes: 60,
    funFact:
      "The tradition of leaving mince pies and a glass of sherry for Santa on Christmas Eve originated in the UK — along with a carrot for the reindeer!",
    milestoneType: "uk",
    displayLabel: "United Kingdom",
  },
  {
    id: "south-america",
    name: "Brazil & South America",
    region: "Americas",
    flag: "🇧🇷",
    utcOffset: -3,
    lat: -22.9,
    lng: -43.2,
    dwellMinutes: 50,
    funFact:
      "Brazilians celebrate Christmas in summer with fireworks, beach parties, and a feast called 'Ceia de Natal' featuring roast turkey and tropical fruits.",
    milestoneType: "major",
    displayLabel: "South America",
  },
  {
    id: "eastern-usa",
    name: "Eastern USA & Canada",
    region: "North America",
    flag: "🇺🇸",
    utcOffset: -5,
    lat: 40.7,
    lng: -74.0,
    dwellMinutes: 40,
    funFact:
      "New York City's Rockefeller Center Christmas tree is decorated with over 50,000 lights and topped with a crystal star weighing over 400 kilograms.",
    milestoneType: "major",
    displayLabel: "Eastern USA",
  },
  {
    id: "central-usa",
    name: "Central USA",
    region: "North America",
    flag: "🇺🇸",
    utcOffset: -6,
    lat: 41.9,
    lng: -87.6,
    dwellMinutes: 35,
    funFact:
      "Chicago's Christkindlmarket, inspired by German tradition, attracts over a million visitors each year with handmade ornaments and warm mulled wine.",
    milestoneType: "major",
    displayLabel: "Central USA",
  },
  {
    id: "mountain-usa",
    name: "Mountain USA",
    region: "North America",
    flag: "🇺🇸",
    utcOffset: -7,
    lat: 39.7,
    lng: -105.0,
    dwellMinutes: 30,
    funFact:
      "Colorado's mountain towns transform into winter wonderlands — many families enjoy a white Christmas with skiing and hot chocolate by the fireplace.",
    milestoneType: "major",
    displayLabel: "Mountain USA",
  },
  {
    id: "west-coast",
    name: "West Coast USA",
    region: "North America",
    flag: "🇺🇸",
    utcOffset: -8,
    lat: 34.1,
    lng: -118.2,
    dwellMinutes: 35,
    funFact:
      "In California, surfing Santas hit the waves on Christmas morning — a uniquely West Coast tradition combining sun, surf, and festive spirit.",
    milestoneType: "major",
    displayLabel: "West Coast USA",
  },
  {
    id: "alaska",
    name: "Alaska",
    region: "North America",
    flag: "🇺🇸",
    utcOffset: -9,
    lat: 61.2,
    lng: -149.9,
    dwellMinutes: 30,
    funFact:
      "In North Pole, Alaska — a real town — the streets have names like Snowman Lane and Santa Claus Lane, and letters to Santa arrive from around the world.",
    milestoneType: "major",
    displayLabel: "Alaska",
  },
  {
    id: "hawaii",
    name: "Hawaii",
    region: "Pacific",
    flag: "🇺🇸",
    utcOffset: -10,
    lat: 21.3,
    lng: -157.8,
    dwellMinutes: 30,
    funFact:
      "Hawaiians say 'Mele Kalikimaka' — Merry Christmas! Santa arrives by outrigger canoe in some island traditions, greeted with leis and hula dancing.",
    milestoneType: "end",
    displayLabel: "Hawaii — Journey Complete",
  },
];

export function getStopArrivalUtcHour(stop: SantaStop): number {
  return 24 - stop.utcOffset;
}

export function getStopArrivalDate(stop: SantaStop, year: number): Date {
  const hour = getStopArrivalUtcHour(stop);
  const date = new Date(Date.UTC(year, 11, 24, 0, 0, 0));
  date.setUTCHours(date.getUTCHours() + hour);
  return date;
}
