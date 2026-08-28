import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/lib/sipwhey";

export type CartLine = { product: Product; qty: number };

type CartApi = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  mrpTotal: number;
  savings: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
};

const CartContext = createContext<CartApi | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const value = useMemo<CartApi>(() => {
    const lines: CartLine[] = Object.entries(items)
      .map(([id, qty]) => ({ product: products.find((p) => p.id === id)!, qty }))
      .filter((l) => l.product && l.qty > 0);

    const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
    const mrpTotal = lines.reduce((s, l) => s + l.product.mrp * l.qty, 0);

    return {
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal,
      mrpTotal,
      savings: mrpTotal - subtotal,
      open,
      setOpen,
      add: (id, qty = 1) => {
        setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + qty }));
        setOpen(true);
      },
      setQty: (id, qty) =>
        setItems((prev) => {
          const next = { ...prev };
          if (qty <= 0) delete next[id];
          else next[id] = qty;
          return next;
        }),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
