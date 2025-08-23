"use-client";

import cn from "@/lib/utils";
import { useProducts } from "@/contexts/ProductsContext";

interface CategoryBarProps {
  activeCateg: string; // currently selected category
  setActiveCateg: React.Dispatch<React.SetStateAction<string>>; // state updater
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
      className="flex justify-center gap-4 flex-wrap scroll-mt-30 py-6 px-9"
      id="product"
    >
      {categories.map((categ, key) => (
        <button
          key={key}
          onClick={() => setActiveCateg(categ)}
          className={cn(
            "px-6 py-2 rounded-full border-2 font-semibold transition-all duration-300 ease-in-out shadow-sm hover:shadow-md",
            categ === activeCateg
              ? "bg-primary text-white border-primary scale-105"
              : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
          )}
        >
          {categ}
        </button>
      ))}
    </div>
  );
}
