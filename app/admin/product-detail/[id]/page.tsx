import LogOutButton from "@/components/admin-components/LogOutButton";
import SearchBar from "@/components/navbar/SearchBar";
import SingleProductDetail from "@/components/product-detail/SingleProductDetail";
import ProductsGrid from "@/components/products-grid/ProductsGrid";

function ProductDetail() {
  return (
    <div className="page">
      <LogOutButton />
      <div className="absolute left-1/2 -translate-x-1/2 top-2 w-80">
        <SearchBar isAdmin={true} />
      </div>
      <SingleProductDetail />
      <ProductsGrid />
    </div>
  );
}

export default ProductDetail;
