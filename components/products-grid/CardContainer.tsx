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
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product, key) => (
        <div
          key={key}
          className="rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-2"
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
            <div className="mt-3 flex gap-3 justify-center">
              <button
                onClick={() => handleEdit(product)}
                className="px-3 py-1 text-sm font-semibold rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="px-3 py-1 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
              >
                🗑️ Delete
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
