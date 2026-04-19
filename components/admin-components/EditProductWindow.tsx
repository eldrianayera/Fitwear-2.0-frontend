"use client";

import { useEffect, useState } from "react";
import cn from "../../lib/utils";
import { Product, useProducts } from "@/contexts/ProductsContext";
import { useAdmin } from "@/contexts/AdminContext";
import Image from "next/image";

interface Props {
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
  editableProduct: Product | null;
  addOrUpdate: "update" | "add";
}

export default function EditProductWindow({
  setIsAdding,
  editableProduct,
  addOrUpdate,
}: Props) {
  const [formData, setFormData] = useState<Product>({
    name: editableProduct?.name || "",
    price: editableProduct?.price || "",
    image: editableProduct?.image || "",
    description: editableProduct?.description || "",
    category: editableProduct?.category || "",
    id: editableProduct?.id || "",
  });

  const { handleAdd, handleUpdate } = useAdmin();
  const { products } = useProducts();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const firstInput =
      document.querySelector<HTMLInputElement>('input[name="name"]');
    firstInput?.focus();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const categories: string[] = [
    ...new Set(products.map((p) => p.category).filter(Boolean) as string[]),
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickAdd = (formData: Product) => {
    if (!formData.name || !formData.price) {
      alert("Name and Price can't be empty");
      return;
    }
    if (addOrUpdate === "add") {
      handleAdd(formData);
    } else if (addOrUpdate === "update") {
      handleUpdate(formData);
    }

    setIsAdding(false);
  };

  return (
    <div
      className={cn(
        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ",
        "w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto",
        "wise-card-large",
        "bg-wise-white",
        "p-8 lg:p-10 flex flex-col z-50 shadow-2xl"
      )}
    >
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-[rgba(14,15,12,0.08)]">
        <h2 className="wise-display-sub text-wise-black">
          {addOrUpdate === "add" ? "Add New Product" : "Edit Product"}
        </h2>
        <p className="wise-body text-wise-gray mt-2">
          {addOrUpdate === "add"
            ? "Fill in the details to add a new product"
            : "Update the product information"}
        </p>
      </div>

      {/* Product form fields */}
      <div className="grid lg:grid-cols-[3fr_2fr] gap-8">
        <div className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="wise-caption text-wise-gray block mb-2">
              Product Name <span className="text-[#d03238]">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Enter product name..."
              className="w-full wise-input"
              required
              onChange={handleChange}
            />
          </div>

          {/* Price */}
          <div>
            <label className="wise-caption text-wise-gray block mb-2">
              Price <span className="text-[#d03238]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 wise-body-semibold text-wise-gray">
                $
              </span>
              <input
                type="number"
                value={formData.price}
                name="price"
                placeholder="0.00"
                className="w-full wise-input pl-8"
                required
                onChange={handleChange}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="wise-caption text-wise-gray block mb-2">
              Category
            </label>
            <div className="flex gap-3">
              <select
                onChange={handleChange}
                name="category"
                value={formData.category}
                className="flex-grow wise-input"
              >
                <option value="" disabled>
                  Select category...
                </option>
                {categories.map((categ, key) => (
                  <option key={key} value={categ}>
                    {categ}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Or add new..."
                className="wise-input w-40"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="wise-caption text-wise-gray block mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full wise-input"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div>
            <label className="wise-caption text-wise-gray block mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              name="description"
              placeholder="Enter product description..."
              rows={4}
              className="resize-none w-full wise-input"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Product Image Preview */}
        <div className="flex items-center justify-center">
          <div
            className="
              w-full aspect-square
              wise-card
              bg-wise-surface
              overflow-hidden
              flex items-center justify-center
              relative
            "
          >
            {formData.image ? (
              <Image
                src={formData.image}
                alt={formData.name || "Product preview"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            ) : (
              <div className="text-center p-6">
                <div className="text-wise-gray text-4xl mb-2">🖼️</div>
                <p className="wise-caption text-wise-gray">
                  Image preview
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-[rgba(14,15,12,0.08)]">
        <button
          onClick={() => setIsAdding(false)}
          className="
            wise-button-secondary
            px-6 py-2
          "
        >
          Cancel
        </button>

        <button
          onClick={() => handleClickAdd(formData)}
          className="
            wise-button-primary
            px-6 py-2
            focus:outline-none focus:ring-2 focus:ring-wise-green-dark focus:ring-offset-2
          "
        >
          {addOrUpdate === "add" ? "Add Product" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
