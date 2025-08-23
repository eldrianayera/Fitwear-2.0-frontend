"use client";

import React, { useState } from "react";
import CategoryBar from "./CategoryBar";
import CardContainer from "./CardContainer";
import { useProducts } from "@/contexts/ProductsContext";
import LoadingPage from "../index-static/LoadingPage";

function ProductsGrid() {
  const [activeCateg, setActiveCateg] = useState<string>("All");
  const { products, isLoading } = useProducts();

  const filteredProducts =
    activeCateg === "All"
      ? products
      : products.filter((p) => p.category === activeCateg);

  if (isLoading) return <LoadingPage />;

  return (
    <div>
      <CategoryBar setActiveCateg={setActiveCateg} activeCateg={activeCateg} />
      <CardContainer products={filteredProducts} />
    </div>
  );
}

export default ProductsGrid;
