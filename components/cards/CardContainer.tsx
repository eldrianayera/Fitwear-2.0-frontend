"use client";

import { useProducts } from "@/contexts/ProductsContext";
import Card from "@/components/cards/Card";

export default function CardContainer() {
  const { products } = useProducts();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-2"
        >
          {/* Product card */}
          <Card
            price={product.price}
            image={product.image}
            name={product.name}
            id={product.id}
          />
        </div>
      ))}
    </div>
  );
}
