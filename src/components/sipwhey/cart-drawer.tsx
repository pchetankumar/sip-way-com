import { Minus, Plus, ShieldCheck, Truck, X } from "lucide-react";
import { useCart } from "./cart";
import { FREE_SHIPPING_THRESHOLD, inr } from "@/lib/sipwhey";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function CartDrawer() {
  const { lines, open, setOpen, subtotal, savings, setQty } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="font-display text-lg tracking-tight">
            Your Box{lines.length > 0 && <span className="text-gold"> · {lines.length}</span>}
          </SheetTitle>
        </SheetHeader>

        <div className="border-b border-border px-6 py-4">
          <p className="text-xs text-muted-foreground">
            {remaining > 0 ? (
              <>
                Add <span className="font-semibold text-foreground">{inr(remaining)}</span> more for
                free express shipping
              </>
            ) : (
              <span className="font-semibold text-foreground">Free express shipping unlocked</span>
            )}
          </p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="bg-gold-gradient h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="font-display text-lg">Your box is empty</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Start your 7-day clear protein ritual.
              </p>
              <Button variant="lux" size="lux" className="mt-6" onClick={() => setOpen(false)}>
                Browse Flavors
              </Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="size-20 shrink-0 rounded-md border border-border bg-card object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate font-display text-sm font-semibold">{product.name}</p>
                      <button
                        aria-label={`Remove ${product.name}`}
                        onClick={() => setQty(product.id, 0)}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {product.sachets} sachets
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          aria-label="Decrease quantity"
                          className="grid size-8 place-items-center"
                          onClick={() => setQty(product.id, qty - 1)}
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                        <button
                          aria-label="Increase quantity"
                          className="grid size-8 place-items-center"
                          onClick={() => setQty(product.id, qty + 1)}
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <span className="font-display text-sm font-bold">
                        {inr(product.price * qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <dt>Subtotal</dt>
                <dd>{inr(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Launch savings</dt>
                <dd className="text-gold-deep">−{inr(savings)}</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Shipping</dt>
                <dd>{remaining > 0 ? "Calculated at checkout" : "Free"}</dd>
              </div>
              <div className="mt-3 flex items-baseline justify-between border-t border-border pt-3">
                <dt className="font-display text-base font-semibold">Total payable</dt>
                <dd className="font-display text-xl font-bold">{inr(subtotal)}</dd>
              </div>
            </dl>
            <Button variant="lux" size="lux" className="mt-5 w-full">
              Secure Checkout
            </Button>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.7rem] text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3.5 text-gold" /> UPI · Cards · Net Banking
              </span>
              <span className="flex items-center gap-1">
                <Truck className="size-3.5 text-gold" /> Dispatch in 24h
              </span>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
