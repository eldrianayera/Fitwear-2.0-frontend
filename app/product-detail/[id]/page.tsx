import LogOutButton from "@/components/admin-components/LogOutButton";
import SingleProductDetail from "@/components/product-detail/SingleProductDetail";
import ProductsGrid from "@/components/products-grid/ProductsGrid";
import React from "react";

function ProductDetail() {
  return (
    <div className="page">
      <LogOutButton />
      <SingleProductDetail />
      <ProductsGrid />
    </div>
  );
}

export default ProductDetail;
