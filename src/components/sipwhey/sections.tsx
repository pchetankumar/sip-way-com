import { useState } from "react";
import {
  Droplets,
  Sparkles,
  Citrus,
  Leaf,
  Minus,
  Plus,
  Star,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import heroGlass from "@/assets/hero-glass.jpg";
import { products, inr, type Product } from "@/lib/sipwhey";
import { useCart } from "./cart";
import { Monogram, Wordmark } from "./logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow text-gold-deep">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy}</p>}
      <div className="rule-gold mx-auto mt-8 h-px w-40" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="pointer-events-none absolute -right-40 top-10 size-[32rem] rounded-full bg-champagne/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 lg:grid-cols-2 lg:px-8 lg:pb-24">
        <div className="animate-fade-in">
          <p className="eyebrow text-gold-deep">Strength Meets Beauty</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Clear Whey Meets Marine Collagen.{" "}
            <span className="text-gold-gradient">7 Days of Crisp Fuel.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            24.5g Total Protein (20g Clear Whey + 5g Marine Collagen) + 80mg Vitamin C. Zero Sugar.
            Zero Artificial Colors. Light as chilled fruit juice.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="lux" size="luxLg" asChild>
              <a href="#flavors">Get Your 7-Day Box — ₹1,599</a>
            </Button>
            <a
              href="#science"
              className="story-link text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
            >
              Explore Formula
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "24.5g Dual Protein",
              "5g Marine Collagen",
              "0g Sugar & Clean Label",
              "Pocket-Friendly Sachets",
            ].map((b) => (
              <li
                key={b}
                className="glass-card rounded-xl px-3 py-4 text-center text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.08em]"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="bg-gold-gradient absolute inset-6 rounded-[2.5rem] opacity-20 blur-2xl" />
          <img
            src={heroGlass}
            alt="Crystal clear SipWhey protein drink over ice beside a gold foil sachet"
            width={1280}
            height={1600}
            className="relative mx-auto w-full max-w-md rounded-[2rem] border border-gold/30 object-cover shadow-lux"
          />
        </div>
      </div>
    </section>
  );
}

const formula = [
  {
    icon: Droplets,
    title: "20g Pure Clear Whey",
    sub: "from 22.5g Isolate",
    copy: "Ultra-filtered, fast-absorbing protein that dissolves 100% translucent without milky bloat.",
  },
  {
    icon: Sparkles,
    title: "5g Hydrolyzed Marine Collagen",
    sub: "4.5g protein",
    copy: "Bioavailable Type I peptides targeting skin firmness, hair strength and joint longevity.",
  },
  {
    icon: Citrus,
    title: "80mg Vitamin C Boost",
    sub: "Collagen cofactor",
    copy: "Essential micronutrient required for natural collagen cross-linking and antioxidant defence.",
  },
  {
    icon: Leaf,
    title: "100% Clean Formulation",
    sub: "Clean label promise",
    copy: "0g Sugar, zero artificial dyes or colors — naturally flavored, light and refreshing.",
  },
];

export function Formula() {
  return (
    <section id="science" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="The Dual-Power Formula"
          title="Two proteins. One crystal-clear sip."
          copy="Engineered for athletes who refuse to choose between performance and beauty recovery."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formula.map(({ icon: Icon, title, sub, copy }) => (
            <article
              key={title}
              className="glass-card group rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-full border border-gold/50">
                <Icon className="size-5 text-gold-deep" />
              </span>
              <h3 className="mt-6 text-lg font-bold leading-tight">{title}</h3>
              <p className="eyebrow mt-2 text-[0.6rem] text-gold-deep">{sub}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const save = product.mrp - product.price;

  return (
    <article className="glass-card flex flex-col overflow-hidden rounded-2xl">
      <div className="relative bg-pearl p-6">
        {product.badge && (
          <span className="bg-gold-gradient absolute left-5 top-5 z-10 rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-obsidian">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={`${product.name} SipWhey box`}
          loading="lazy"
          className="mx-auto aspect-square w-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span
            className={`size-2.5 rounded-full ${
              product.pill === "pineapple"
                ? "bg-pineapple"
                : product.pill === "blueberry"
                  ? "bg-blueberry"
                  : "bg-gold-gradient"
            }`}
          />
          <span className="eyebrow text-[0.6rem] text-muted-foreground">
            {product.sachets} Sachets
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{product.flavourNote}</p>

        <div className="mt-5 flex flex-wrap items-baseline gap-3">
          <span className="font-display text-2xl font-bold">{inr(product.price)}</span>
          <span className="text-sm text-muted-foreground line-through">{inr(product.mrp)}</span>
          <span className="rounded-full bg-champagne px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-gold-deep">
            Save {inr(save)}
          </span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border">
            <button
              aria-label="Decrease quantity"
              className="grid size-10 place-items-center"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              <Minus className="size-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-semibold">{qty}</span>
            <button
              aria-label="Increase quantity"
              className="grid size-10 place-items-center"
              onClick={() => setQty((q) => q + 1)}
            >
              <Plus className="size-3.5" />
            </button>
          </div>
          <Button
            variant="lux"
            size="lux"
            className="flex-1"
            onClick={() => add(product.id, qty)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Flavors() {
  return (
    <section id="flavors" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Choose Your Box"
          title="Seven sachets. Seven days of ritual."
          copy="Every box carries 7 pre-measured single-serve sachets — one crisp sip for every day of the week."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Tear & Pour", c: "One pre-measured 30g sachet — no scoops, no mess, no guesswork." },
  { n: "02", t: "Shake Cold", c: "Add 300–350ml chilled water and shake for 15–20 seconds." },
  { n: "03", t: "Sip Clear & Glow", c: "Translucent, light protein hydration that never sits heavy." },
];

export function HowItWorks() {
  return (
    <section id="nutrition" className="bg-obsidian-gradient py-20 text-pearl lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">How It Works</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Three steps to clear.</h2>
          <div className="rule-gold mx-auto mt-8 h-px w-40" />
        </div>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-gold/25 p-8">
              <span className="font-display text-4xl font-bold text-gold">{s.n}</span>
              <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-pearl/70">{s.c}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-4 rounded-2xl border border-gold/25 p-8 sm:grid-cols-4">
          {[
            ["Serving size", "30g sachet"],
            ["Total protein", "24.5g"],
            ["Added sugar", "0g"],
            ["Vitamin C", "80mg"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="eyebrow text-[0.6rem] text-pearl/50">{k}</p>
              <p className="mt-2 font-display text-2xl font-bold text-gold">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    q: "Finally a protein that tastes like a cold juice after training. No bloat, no chalk.",
    n: "Aditi R.",
    r: "Marathon runner, Bangalore",
  },
  {
    q: "Six weeks in and my skin looks better than it has in years. The collagen is doing work.",
    n: "Karan M.",
    r: "Pilates instructor, Mumbai",
  },
  {
    q: "The sachets live in my gym bag. Tear, shake, done — zero prep and completely clear.",
    n: "Nikita S.",
    r: "Strength athlete, Delhi",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading eyebrow="Reviews" title="Loved by athletes who glow." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="glass-card rounded-2xl p-8">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed">“{r.q}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-sm font-bold">{r.n}</p>
                <p className="text-xs text-muted-foreground">{r.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Why two proteins in one sachet?",
    a: "Clear whey isolate delivers 20g of fast-absorbing protein for muscle synthesis, while 5g of hydrolyzed marine collagen adds Type I peptides for skin, hair and joints — 24.5g total protein per serving.",
  },
  {
    q: "Does it taste like a regular protein shake?",
    a: "No. SipWhey mixes crystal clear and drinks like a chilled fruit juice — light, refreshing and completely free of the milky, heavy texture of traditional whey shakes.",
  },
  {
    q: "How well does it mix?",
    a: "Fully. Add one 30g sachet to 300–350ml of cold water and shake for 15–20 seconds. It dissolves 100% translucent with no clumps or residue.",
  },
  {
    q: "Is it really 0g sugar?",
    a: "Yes. Zero added sugar, zero artificial colors or dyes. Sweetness comes from stevia leaf extract and sucralose with natural flavours.",
  },
  {
    q: "When should I drink it?",
    a: "Post-workout for recovery, or any time of day as a light protein-and-hydration boost. One sachet a day makes the 7-day box a complete weekly ritual.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Everything, clearly answered." />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-display text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-obsidian-gradient text-pearl">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-pearl [&_span]:text-pearl">
              <Monogram className="border-gold" />
              <Wordmark />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-pearl/60">
              Clear whey isolate and marine collagen in a 7-day sachet ritual. Strength meets
              beauty.
            </p>
            <form
              className="mt-7"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
            >
              <label className="eyebrow text-[0.6rem] text-gold" htmlFor="newsletter">
                10% off your first box
              </label>
              <div className="mt-3 flex gap-2">
                <Input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="h-11 rounded-full border-pearl/20 bg-transparent text-pearl placeholder:text-pearl/40"
                />
                <Button type="submit" variant="gold" size="lux">
                  Join
                </Button>
              </div>
              {sent && <p className="mt-3 text-xs text-gold">Welcome in — check your inbox.</p>}
            </form>
          </div>

          {[
            { h: "Shop", l: ["Pineapple Box", "Blueberry Box", "Duo Variety Bundle", "Gift Boxes"] },
            { h: "Ingredients", l: ["Whey Isolate", "Marine Collagen", "Vitamin C", "Full Label"] },
            { h: "Legal", l: ["Privacy Policy", "Terms of Service", "Shipping & Returns", "Contact"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="eyebrow text-[0.6rem] text-gold">{col.h}</p>
              <ul className="mt-5 space-y-3 text-sm text-pearl/65">
                {col.l.map((i) => (
                  <li key={i}>
                    <a href="#top" className="transition-colors hover:text-pearl">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-pearl/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-pearl/50">
            © {new Date().getFullYear()} SipWhey Wellness Pvt. Ltd. · Bangalore, India · FSSAI Lic.
            11220332001407
          </p>
          <div className="flex gap-3">
            {[Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                aria-label="Social channel"
                className="grid size-9 place-items-center rounded-full border border-pearl/20 transition-colors hover:border-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
