import { ProductsContextProvider } from "@/contexts/ProductsContext";
import { ReactQueryProvider } from "@/contexts/QueryProvider";
import { fetchProductsServer } from "@/lib/fetchAllProducts";
import { AuthContextProvider } from "@/contexts/AuthContext";
import "../globals.css";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialProducts = await fetchProductsServer();

  return (
    <ProductsContextProvider initialProducts={initialProducts}>
      {children}
    </ProductsContextProvider>
  );
}
