"use client";

import { useEffect, useState } from "react";
import cn from "../../lib/utils";
import { Product, useProducts } from "@/contexts/ProductsContext";
import { useAdmin } from "@/contexts/AdminContext";

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
    // Lock scroll when modal opens
    document.body.style.overflow = "hidden";

    // Optional: focus the first input
    const firstInput =
      document.querySelector<HTMLInputElement>('input[name="name"]');
    firstInput?.focus();

    // Cleanup on unmount (modal closes)
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
        // positioning
        "fixed left-1/2 top-5 -translate-x-1/2 ",
        // appearance
        "w-[90%] h-[90%] bg-white rounded-4xl shadow-2xl p-6 flex flex-col justify-between overflow-auto z-99"
      )}
    >
      {/* Product form fields */}
      <div className="grid grid-cols-[3fr_2fr] gap-8">
        <div className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block font-semibold mb-1">Product Name</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Enter product name..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
              onChange={handleChange}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="text"
              value={formData.price}
              name="price"
              placeholder="Enter product price..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <div className="flex gap-3">
              <select
                onChange={handleChange}
                name="category"
                value={formData.category}
                className="flex-grow p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="" disabled>
                  -- Select category --
                </option>
                {categories.map((categ, key) => (
                  <option key={key} value={categ}>
                    {categ}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="New category..."
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
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
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="text"
              value={formData.image}
              name="image"
              placeholder="Paste image URL..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              value={formData.description}
              name="description"
              placeholder="Enter product description..."
              rows={3}
              className="resize-none w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Product Image Preview */}
        <div className="h-100 w-120 flex items-center justify-center border rounded-lg overflow-hidden self-center">
          {formData.image ? (
            <img
              src={formData.image}
              alt={formData.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
              No image
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => setIsAdding(false)}
          className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>

        <button
          onClick={() => handleClickAdd(formData)}
          className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          {addOrUpdate === "add" ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
}
