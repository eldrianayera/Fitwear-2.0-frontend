"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Product, useProducts } from "@/contexts/ProductsContext";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  isAdmin: boolean;
}

export default function SearchBar({ isAdmin }: Props) {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { products, isLoading } = useProducts();

  useEffect(() => {
    if (!search) {
      setFilteredProducts([]);
      return;
    }

    setFilteredProducts(
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <div className="relative w-full max-w-xs sm:max-w-md">
      <form
        className="flex items-center wise-input pr-2 bg-wise-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="w-full px-3 py-2 bg-transparent focus:outline-none wise-body"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="p-1 rounded-full hover:bg-[rgba(211,242,192,0.4)] transition-colors duration-200"
          aria-label="Search"
        >
          <Search className="text-wise-black" size={18} />
        </button>
      </form>

      {/* Results Dropdown */}
      {filteredProducts.length > 0 && (
        <div
          className="
            absolute mt-2 w-full max-h-64 overflow-auto
            bg-wise-white wise-card
            shadow-lg
          "
          style={{ borderRadius: "16px" }}
        >
          {filteredProducts.map((product) => (
            <Link
              href={
                isAdmin
                  ? `/admin/product-detail/${product.id}`
                  : `/product-detail/${product.id}`
              }
              key={product.id}
              className="
                flex items-center gap-3 p-3
                hover:bg-[rgba(211,242,192,0.4)]
                transition-colors duration-200
                cursor-pointer
                border-b border-[rgba(14,15,12,0.08)] last:border-0
              "
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-wise-surface flex-shrink-0">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-wise-gray">
                    <Search size={16} />
                  </div>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="wise-body-semibold truncate">{product.name}</span>
                <span className="wise-caption text-wise-gray">
                  ${Number(product.price)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No results */}
      {search && filteredProducts.length === 0 && (
        <div
          className="
            absolute left-0 right-0 mt-2
            bg-wise-white wise-card
            px-4 py-3 wise-caption text-wise-gray
          "
          style={{ borderRadius: "16px" }}
        >
          No products found
        </div>
      )}
    </div>
  );
}
