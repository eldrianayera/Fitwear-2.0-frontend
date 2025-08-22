"use client";

import { axiosInstance } from "@/api/axiosInstance";
import { createContext, ReactNode, useContext } from "react";
import { Product } from "./ProductsContext";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "./QueryProvider";

interface AdminContextType {
  handleAdd: (newProduct: Product) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminContextProvider = ({ children }: { children: ReactNode }) => {
  const { mutate: addProduct } = useMutation({
    mutationFn: async (newProduct: Product) => {
      await axiosInstance.post("/admin/products", newProduct);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["allProducts"] }),
    onError: () => {
      alert("Failed to add new product");
    },
  });

  const handleAdd = async (newProduct: Product) => {
    addProduct(newProduct);
  };

  return (
    <AdminContext.Provider value={{ handleAdd }}>
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
