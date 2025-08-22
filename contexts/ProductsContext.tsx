"use client";

import { axiosInstance } from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";

// Types Declaration /////////////////////////////////////////////////
export type Product = {
  id: string;
  name: string;
  price: string;
  image?: string;
  description?: string;
  category?: string;
};

interface ProductsContext {
  products: Product[];
}

const defaultState: ProductsContext = {
  products: [],
};

// Create Context ///////////////////////////////////////
const ProductsContext = createContext<ProductsContext>(defaultState);

// Context Functions////////////////////////

// Context Provider //////////////////////////
export const ProductsContextProvider = ({
  children,
  initialProducts,
}: {
  children: ReactNode;
  initialProducts: Product[];
}) => {
  const { data: products = initialProducts } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/products");
      return data;
    },
    initialData: initialProducts,
    staleTime: Infinity,
  });

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook for easier usage
export const useProducts = () => useContext(ProductsContext);
