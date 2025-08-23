"use client";

import { useAdmin } from "@/contexts/AdminContext";
import { useAuth } from "@/contexts/AuthContext";
import { Product, useProducts } from "@/contexts/ProductsContext";
import cn from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function SingleProductDetail() {
  const { id }: { id: string } = useParams();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editableProduct, setEditableProduct] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const router = useRouter();

  const { session } = useAuth();
  const { products } = useProducts();
  const { handleUpdate, handleDelete } = useAdmin();

  const selectedProduct = products.find((p) => p.id === id);

  const isAdmin = session !== null;
  const canEdit = isAdmin && isEditing;

  useEffect(() => {
    if (!selectedProduct) return;
    setEditableProduct(selectedProduct);
    setIsEditing(false);
  }, [selectedProduct]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditableProduct((prev) => {
      if (!prev) return prev; // stays null
      return {
        ...prev,
        [name]: value,
      } as Product; // force TS to see it as complete
    });
  };

  const handleClickDelete = (id: string) => {
    handleDelete(id);
    router.push("/admin");
  };

  const handleClickSave = () => {
    if (!editableProduct) return;
    handleUpdate(editableProduct);
  };

  if (!selectedProduct) return;
  return (
    <div className="max-w-6xl mx-auto border-4 rounded-lg overflow-hidden bg-white shadow-lg m-10 ">
      {isDeleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            onClick={() => setIsDeleting(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* modal */}
          <div className="relative z-50 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
            <p className="text-center text-lg font-semibold">
              Are you sure you want to delete{" "}
              <span className="font-bold">
                &apos;{selectedProduct.name}&apos;
              </span>{" "}
              product?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsDeleting(false)}
                className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={() => handleClickDelete(id)}
                className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 border-b bg-white ">
        <Link
          href={isAdmin ? "/admin" : "/#product"}
          className="
      inline-block
      border-2 border-primary
      text-primary font-semibold
      px-4 py-1 rounded-md
      hover:bg-primary hover:text-white
      transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-primary
    "
        >
          <Home />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-10">
        {/* Image Container */}
        <div className="flex-shrink-0 w-full md:w-96 h-72 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          {editableProduct?.image ? (
            <img
              src={editableProduct?.image}
              alt={editableProduct?.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="text-gray-400 text-sm">No image</div>
          )}
        </div>

        {/* Details Form */}
        <div className="flex flex-col flex-grow gap-6">
          <input
            className="text-4xl font-bold border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1"
            value={editableProduct?.name ?? ""}
            name="name"
            onChange={canEdit ? handleChange : undefined}
            readOnly={!canEdit}
          />

          <div className="flex items-center gap-2">
            <label className="text-4xl font-bold select-none" htmlFor="price">
              Rp
            </label>
            <input
              id="price"
              className="text-4xl font-bold border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1 flex-grow"
              value={editableProduct?.price ?? ""}
              name="price"
              readOnly={!canEdit}
              onChange={canEdit ? handleChange : undefined}
              type="number"
              min="0"
            />
          </div>

          <input
            className="text-sm text-gray-600 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1"
            value={editableProduct?.category ?? ""}
            name="category"
            readOnly={!canEdit}
            onChange={canEdit ? handleChange : undefined}
          />

          <textarea
            value={editableProduct?.description ?? ""}
            name="description"
            className="resize-none border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
            readOnly={!canEdit}
            onChange={canEdit ? handleChange : undefined}
          />

          {isAdmin && (
            <div className="self-end flex gap-4 mt-4">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleClickSave}
                    className="border-2 border-primary text-primary px-4 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsDeleting(true)}
                    className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="border-2 border-primary text-primary px-4 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetail;
