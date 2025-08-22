import { axiosInstance } from "@/api/axiosInstance";
import { Product } from "@/contexts/ProductsContext";

export const fetchProductsServer = async (): Promise<Product[]> => {
  try {
    const { data } = await axiosInstance.get("/products");
    return data;
  } catch (error) {
    console.error("Failed to fetch products on server:", error);
    return [];
  }
};
