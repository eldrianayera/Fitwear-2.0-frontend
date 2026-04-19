"use client";

import cn from "@/lib/utils";
import { useProducts } from "@/contexts/ProductsContext";

interface CategoryBarProps {
  activeCateg: string;
  setActiveCateg: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryBar({
  setActiveCateg,
  activeCateg,
}: CategoryBarProps) {
  const { products } = useProducts();

  const categories: string[] = [
    "All",
    ...[
      ...new Set(products.map((p) => p.category).filter(Boolean) as string[]),
    ],
  ];

  return (
    <div
      className="flex justify-center gap-3 flex-wrap scroll-mt-30 py-8 px-6"
      id="product"
    >
      {categories.map((categ, key) => (
        <button
          key={key}
          onClick={() => setActiveCateg(categ)}
          className={cn(
            "wise-button-secondary transition-all duration-200",
            categ === activeCateg
              ? "bg-wise-green text-wise-green-dark"
              : "bg-[rgba(22,51,0,0.08)] text-wise-black hover:bg-[rgba(22,51,0,0.15)]"
          )}
        >
          {categ}
        </button>
      ))}
    </div>
  );
}
