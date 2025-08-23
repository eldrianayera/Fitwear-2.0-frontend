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
      setFilteredProducts([]); // clear results if empty
      return;
    }

    setFilteredProducts(
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <div className="relative w-full max-w-md">
      <form
        className="flex items-center border-2 rounded-lg pr-2 bg-background"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="w-full px-4 py-1 rounded-xl bg-background focus:outline-none"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <Search className="text-foreground" />
        </button>
      </form>

      {/*  Results Dropdown */}

      {filteredProducts.length > 0 && (
        <div className="absolute mt-2 w-full max-h-64 overflow-auto bg-white border rounded-lg shadow-lg">
          {filteredProducts.map((product) => (
            <Link
              href={
                isAdmin
                  ? `/admin/product-detail/${product.id}`
                  : `/product-detail/${product.id}`
              }
              key={product.id}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                width={40}
                height={40}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className="font-medium">{product.name}</span>
                <span className="text-sm text-gray-500">${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
      {/* No results */}
      {search && filteredProducts.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg px-4 py-2 text-muted-foreground">
          No results found
        </div>
      )}
    </div>
  );
}
