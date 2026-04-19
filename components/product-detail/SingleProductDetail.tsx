"use client";

import { useAdmin } from "@/contexts/AdminContext";
import { useAuth } from "@/contexts/AuthContext";
import { Product, useProducts } from "@/contexts/ProductsContext";
import { Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
      if (!prev) return prev;
      return {
        ...prev,
        [name]: value,
      } as Product;
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
    <div
      className="
        max-w-5xl mx-auto my-12
        wise-card-large
        bg-wise-white
        overflow-hidden
      "
    >
      {/* Delete Confirmation Modal */}
      {isDeleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setIsDeleting(false)}
            className="absolute inset-0 bg-wise-black/50 backdrop-blur-sm"
          />
          <div
            className="
              relative z-50 w-[90%] max-w-md
              wise-card-large
              bg-wise-white
              p-10 flex flex-col gap-6
            "
          >
            <p className="wise-body-semibold text-wise-black text-center">
              Are you sure you want to delete{" "}
              <span className="font-bold text-wise-green">
                &apos;{selectedProduct.name}&apos;
              </span>{" "}
              product?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsDeleting(false)}
                className="
                  wise-button-secondary
                  px-6 py-2
                "
              >
                Cancel
              </button>

              <button
                onClick={() => handleClickDelete(id)}
                className="
                  px-6 py-2
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
          </div>
        </div>
      )}

      {/* Header with Back Button */}
      <div className="p-6 border-b border-[rgba(14,15,12,0.08)] bg-wise-white">
        <Link
          href={isAdmin ? "/admin" : "/#product"}
          className="
            inline-flex items-center gap-2
            wise-button-secondary
            px-4 py-2
          "
        >
          <Home size={18} />
          <span>Back</span>
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-12">
        {/* Image Container */}
        <div
          className="
            flex-shrink-0 w-full lg:w-[400px]
            bg-wise-surface
            rounded-2xl
            overflow-hidden
            flex items-center justify-center
            relative
          "
        >
          {editableProduct?.image ? (
            <Image
              src={editableProduct?.image}
              alt={editableProduct?.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            <div className="text-wise-gray wise-caption">No image</div>
          )}
        </div>

        {/* Details Form */}
        <div className="flex flex-col flex-grow gap-6">
          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="wise-caption text-wise-gray block mb-2"
            >
              Product Name
            </label>
            <input
              className="
                w-full
                wise-display-sub text-wise-black
                border-b-2 border-[rgba(14,15,12,0.12)]
                focus:outline-none focus:border-wise-green
                p-2 bg-transparent
                transition-colors duration-200
              "
              value={editableProduct?.name ?? ""}
              name="name"
              onChange={canEdit ? handleChange : undefined}
              readOnly={!canEdit}
              style={{ lineHeight: "1.2" }}
            />
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="price"
              className="
                wise-display-sub text-wise-green
                select-none
              "
              style={{ lineHeight: "1.2" }}
            >
              $
            </label>
            <div className="flex-grow">
              <input
                id="price"
                className="
                  w-full
                  wise-display-sub text-wise-black
                  border-b-2 border-[rgba(14,15,12,0.12)]
                  focus:outline-none focus:border-wise-green
                  p-2 bg-transparent
                  transition-colors duration-200
                "
                value={editableProduct?.price ?? ""}
                name="price"
                readOnly={!canEdit}
                onChange={canEdit ? handleChange : undefined}
                type="number"
                min="0"
                step="0.01"
                style={{ lineHeight: "1.2" }}
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="wise-caption text-wise-gray block mb-2"
            >
              Category
            </label>
            <input
              className="
                w-full
                wise-body text-wise-black
                border-b border-[rgba(14,15,12,0.12)]
                focus:outline-none focus:border-wise-green
                p-2 bg-transparent
                transition-colors duration-200
              "
              value={editableProduct?.category ?? ""}
              name="category"
              readOnly={!canEdit}
              onChange={canEdit ? handleChange : undefined}
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="wise-caption text-wise-gray block mb-2"
            >
              Description
            </label>
            <textarea
              value={editableProduct?.description ?? ""}
              name="description"
              className="
                w-full
                wise-body text-wise-black
                wise-input
                resize-none
                min-h-[120px]
              "
              readOnly={!canEdit}
              onChange={canEdit ? handleChange : undefined}
            />
          </div>

          {/* Admin Actions */}
          {isAdmin && (
            <div className="self-end flex gap-4 mt-4">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="
                      px-6 py-2
                      rounded-full font-semibold
                      border-2 border-[#d03238]
                      text-[#d03238]
                      hover:bg-[#d03238] hover:text-white
                      transition-all duration-200
                    "
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleClickSave}
                    className="
                      wise-button-primary
                      px-6 py-2
                    "
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsDeleting(true)}
                    className="
                      px-6 py-2
                      rounded-full font-semibold
                      border-2 border-[#d03238]
                      text-[#d03238]
                      hover:bg-[#d03238] hover:text-white
                      transition-all duration-200
                    "
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="
                      wise-button-primary
                      px-6 py-2
                    "
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
