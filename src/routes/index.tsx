import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/components/sipwhey/cart";
import { CartDrawer } from "@/components/sipwhey/cart-drawer";
import { Header } from "@/components/sipwhey/header";
import {
  Hero,
  Formula,
  Flavors,
  HowItWorks,
  Reviews,
  Faq,
  Footer,
} from "@/components/sipwhey/sections";

const title = "SipWhey — Clear Whey + Marine Collagen 7-Day Sachet Box";
const description =
  "24.5g total protein per sachet: 20g clear whey isolate + 5g marine collagen + 80mg Vitamin C. Zero sugar, zero artificial colors. 7-day boxes from ₹1,599.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Formula />
        <Flavors />
        <HowItWorks />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
