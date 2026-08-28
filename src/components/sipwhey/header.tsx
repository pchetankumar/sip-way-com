import { useEffect, useState } from "react";
import { ShoppingBag, Menu } from "lucide-react";
import { Monogram, Wordmark } from "./logo";
import { useCart } from "./cart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { label: "The Science", href: "#science" },
  { label: "Flavors", href: "#flavors" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-x-0 border-t-0 rounded-none" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:grid-cols-3 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Monogram />
          <Wordmark />
        </a>

        <nav className="hidden justify-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="story-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open cart"
            className="relative grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card transition-colors hover:border-gold"
          >
            <ShoppingBag className="size-4" />
            {count > 0 && (
              <span className="bg-gold-gradient absolute -right-1 -top-1 grid size-5 place-items-center rounded-full text-[0.65rem] font-bold text-obsidian">
                {count}
              </span>
            )}
          </button>

          <Button variant="lux" size="lux" className="hidden sm:inline-flex" asChild>
            <a href="#flavors">Shop 7-Day Box</a>
          </Button>

          <Sheet open={menu} onOpenChange={setMenu}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card lg:hidden"
              >
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-8">
              <nav className="mt-10 flex flex-col gap-6">
                {nav.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenu(false)}
                    className="font-display text-xl font-semibold tracking-tight"
                  >
                    {n.label}
                  </a>
                ))}
                <Button variant="lux" size="lux" asChild>
                  <a href="#flavors" onClick={() => setMenu(false)}>
                    Shop 7-Day Box
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
