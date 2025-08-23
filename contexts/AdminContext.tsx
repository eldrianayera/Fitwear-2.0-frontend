"use client";

import { axiosInstance } from "@/api/axiosInstance";
import { Toaster, toast } from "sonner";
import { createContext, ReactNode, useContext } from "react";
import { Product } from "./ProductsContext";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "./QueryProvider";

interface AdminContextType {
  handleAdd: (newProduct: Product) => void;
  handleUpdate: (updatedProduct: Product) => void;
  handleDelete: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminContextProvider = ({ children }: { children: ReactNode }) => {
  //  Add new Product
  const { mutate: addProduct } = useMutation({
    mutationFn: async (newProduct: Product) => {
      await axiosInstance.post("/admin/products", newProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      toast.success("New product added successfully!");
    },
    onError: () => {
      toast.error("Failed to add new product !");
    },
  });

  // Update existing product
  const { mutate: updateProduct } = useMutation({
    mutationFn: async (updatedProduct: Product) => {
      await axiosInstance.put(
        `/admin/products/${updatedProduct.id}`,
        updatedProduct
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      toast.success("Product has been updated !");
    },
    onError: () => {
      toast.error("Failed to add new product !");
    },
  });

  // Delete existing product
  const { mutate: deleteProduct } = useMutation({
    mutationFn: async (id: string) => {
      await axiosInstance.delete(`/admin/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      toast.success("Product has been deleted !");
    },
    onError: () => {
      toast.error("Failed to delete product");
    },
  });

  const handleAdd = async (newProduct: Product) => {
    addProduct(newProduct);
  };

  const handleUpdate = async (updatedProduct: Product) => {
    updateProduct(updatedProduct);
  };

  const handleDelete = async (id: string) => {
    deleteProduct(id);
  };

  return (
    <AdminContext.Provider value={{ handleAdd, handleUpdate, handleDelete }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context)
    throw new Error("useAdmin must be used within AdminContextProvider");
  return context;
};
