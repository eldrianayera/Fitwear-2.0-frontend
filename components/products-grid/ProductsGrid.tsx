"use client";

import React, { useState } from "react";
import CategoryBar from "./CategoryBar";
import CardContainer from "./CardContainer";
import { useProducts } from "@/contexts/ProductsContext";

function ProductsGrid() {
  const [activeCateg, setActiveCateg] = useState<string>("All");
  const { products } = useProducts();

  const filteredProducts =
    activeCateg === "All"
      ? products
      : products.filter((p) => p.category === activeCateg);

  return (
    <div>
      <CategoryBar setActiveCateg={setActiveCateg} activeCateg={activeCateg} />
      <CardContainer products={filteredProducts} />
    </div>
  );
}

export default ProductsGrid;
