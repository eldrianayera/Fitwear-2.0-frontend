"use client";

import { useProducts } from "@/contexts/ProductsContext";
import { Home } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function SingleProductDetail() {
  const { id }: { id: string } = useParams();
  const [canEdit, setCanEdit] = useState<Boolean>(false);

  const { products } = useProducts();
  const selectedProduct = products.find((p) => (p.id = id));

  const handleChange = () => {};

  if (!selectedProduct) return;
  return (
    <div className="max-w-6xl mx-auto border-4 rounded-lg overflow-hidden bg-white shadow-lg m-10 ">
      <div className="p-4 border-b bg-white ">
        <a
          href="/#product"
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
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-10">
        {/* Image Container */}
        <div className="flex-shrink-0 w-full md:w-96 h-72 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          {selectedProduct.image ? (
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
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
            value={selectedProduct.name}
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
              value={selectedProduct.price}
              name="price"
              readOnly={!canEdit}
              onChange={canEdit ? handleChange : undefined}
              type="number"
              min="0"
            />
          </div>

          <input
            className="text-sm text-gray-600 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1"
            value={selectedProduct.category}
            name="category"
            readOnly={!canEdit}
            onChange={canEdit ? handleChange : undefined}
          />

          <textarea
            value={selectedProduct.description}
            name="description"
            className="resize-none border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
            readOnly={!canEdit}
            onChange={canEdit ? handleChange : undefined}
          />

          {/* {isValidAdmin && (
            <div className="self-end flex gap-4 mt-4">
              <button
                onClick={() => handleDelete(id)}
                className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition-colors"
              >
                Delete
              </button>
              {isEditingSingleProduct ? (
                <button
                  onClick={handleClickSave}
                  className="border-2 border-primary text-primary px-4 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingSingleProduct(true)}
                  className="border-2 border-primary text-primary px-4 py-1 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  Edit
                </button>
              )}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetail;
