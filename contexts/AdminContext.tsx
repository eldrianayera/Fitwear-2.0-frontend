"use client";

import { axiosInstance } from "@/api/axiosInstance";
import { toast } from "sonner";
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
      try {
        await axiosInstance.post("/admin/products", newProduct);
      } catch (error) {
        console.warn("API unavailable - product add simulated");
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      toast.success("New product added successfully!");
    },
    onError: (error) => {
      // Still show success for demo purposes when API is unavailable
      if ((error as any)?.code === "ERR_BAD_REQUEST" || (error as any)?.code === "ECONNREFUSED") {
        queryClient.invalidateQueries({ queryKey: ["allProducts"] });
        toast.success("Demo mode: Product added (not saved to backend)");
      } else {
        toast.error("Failed to add new product!");
      }
    },
  });

  // Update existing product
  const { mutate: updateProduct } = useMutation({
    mutationFn: async (updatedProduct: Product) => {
      try {
        await axiosInstance.put(
          `/admin/products/${updatedProduct.id}`,
          updatedProduct
        );
      } catch (error) {
        console.warn("API unavailable - product update simulated");
        await new Promise((resolve) => setTimeout(resolve, 500));
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      toast.success("Product has been updated!");
    },
    onError: (error) => {
      if ((error as any)?.code === "ERR_BAD_REQUEST" || (error as any)?.code === "ECONNREFUSED") {
        queryClient.invalidateQueries({ queryKey: ["allProducts"] });
        toast.success("Demo mode: Product updated (not saved to backend)");
      } else {
        toast.error("Failed to update product!");
      }
    },
  });

  // Delete existing product
  const { mutate: deleteProduct } = useMutation({
    mutationFn: async (id: string) => {
      try {
        await axiosInstance.delete(`/admin/products/${id}`);
      } catch (error) {
        console.warn("API unavailable - product delete simulated");
        await new Promise((resolve) => setTimeout(resolve, 500));
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      toast.success("Product has been deleted!");
    },
    onError: (error) => {
      if ((error as any)?.code === "ERR_BAD_REQUEST" || (error as any)?.code === "ECONNREFUSED") {
        queryClient.invalidateQueries({ queryKey: ["allProducts"] });
        toast.success("Demo mode: Product deleted (not saved to backend)");
      } else {
        toast.error("Failed to delete product!");
      }
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
