"use client";

import { useEffect, useState } from "react";
import cn from "../../lib/utils";
import { Product, useProducts } from "@/contexts/ProductsContext";
import { useAdmin } from "@/contexts/AdminContext";

export default function EditProductWindow({
  setIsAdding,
}: {
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [formData, setFormData] = useState<Product>({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    id: "",
  });

  const { handleAdd } = useAdmin();
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

  const handleUpdate = (
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
    handleAdd(formData);
  };

  return (
    <div
      className={cn(
        // positioning
        "fixed left-1/2 top-5 -translate-x-1/2 ",
        // appearance
        "z-50 w-[90%] h-[90%] bg-white rounded-4xl shadow-2xl p-6 flex flex-col justify-between overflow-auto "
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
              onChange={handleUpdate}
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
              onChange={handleUpdate}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <div className="flex gap-3">
              <select
                onChange={handleUpdate}
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
              onChange={handleUpdate}
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
              onChange={handleUpdate}
            ></textarea>
          </div>
        </div>

        {/* Product Image Preview */}
        <div className="flex items-center justify-center border rounded-lg overflow-hidden">
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
          Add
        </button>
      </div>
    </div>
  );
}
