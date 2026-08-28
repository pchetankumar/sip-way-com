import pineapple from "@/assets/box-pineapple.jpg.asset.json";
import blueberry from "@/assets/box-blueberry.jpg.asset.json";
import duo from "@/assets/box-duo.jpg.asset.json";

export type Product = {
  id: string;
  name: string;
  flavourNote: string;
  sachets: number;
  price: number;
  mrp: number;
  image: string;
  badge?: string;
  pill: "pineapple" | "blueberry" | "duo";
};

export const products: Product[] = [
  {
    id: "pineapple-7",
    name: "Tropical Pineapple",
    flavourNote: "Crisp, juicy, sunlit citrus finish",
    sachets: 7,
    price: 1599,
    mrp: 1999,
    image: pineapple.url,
    pill: "pineapple",
  },
  {
    id: "blueberry-7",
    name: "Wild Blueberry",
    flavourNote: "Cool berry with a clean, dry finish",
    sachets: 7,
    price: 1599,
    mrp: 1999,
    image: blueberry.url,
    pill: "blueberry",
  },
  {
    id: "duo-14",
    name: "Duo Variety Bundle",
    flavourNote: "1 Pineapple box + 1 Blueberry box",
    sachets: 14,
    price: 3200,
    mrp: 3998,
    image: duo.url,
    badge: "Best Value / 14-Day Supply",
    pill: "duo",
  },
];

export const FREE_SHIPPING_THRESHOLD = 1999;

export const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
