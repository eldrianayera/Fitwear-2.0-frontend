"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Product } from "@/contexts/ProductsContext";
import Card from "@/components/products-grid/Card";
import { useAdmin } from "@/contexts/AdminContext";
import { useState } from "react";
import EditProductWindow from "../admin-components/EditProductWindow";

export default function CardContainer({ products }: { products: Product[] }) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [editableProduct, setEditableProduct] = useState<Product | null>(null);
  const { session } = useAuth();
  const { handleDelete } = useAdmin();
  const isAdmin = session;

  const handleEdit = (product: Product) => {
    setEditableProduct(product);
    setIsAdding(true);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center px-6 pb-12">
      {products.map((product, key) => (
        <div
          key={key}
          className="
            wise-card-small
            bg-wise-white
            p-2
            transition-all duration-200
          "
        >
          {/* Product card */}
          <Card
            price={product.price}
            image={product.image}
            name={product.name}
            id={product.id}
            isAdmin={isAdmin}
          />

          {/* Admin action buttons */}
          {isAdmin && (
            <div className="mt-3 flex gap-2 justify-center">
              <button
                onClick={() => handleEdit(product)}
                className="
                  wise-button-secondary
                  px-3 py-1 wise-caption
                  text-wise-black
                  hover:bg-wise-mint
                "
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="
                  px-3 py-1 wise-caption
                  rounded-full font-semibold
                  border-2 border-[#d03238]
                  text-[#d03238]
                  hover:bg-[#d03238] hover:text-white
                  transition-all duration-200
                "
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}

      {isAdding && (
        <EditProductWindow
          setIsAdding={setIsAdding}
          editableProduct={editableProduct}
          addOrUpdate={"update"}
        />
      )}
    </div>
  );
}
