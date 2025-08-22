import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/navbar/Navbar";
import { ProductsContextProvider } from "@/contexts/ProductsContext";
import { ReactQueryProvider } from "@/contexts/QueryProvider";
import { fetchProductsServer } from "@/lib/fetchAllProducts";
import { AuthContextProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Fitwear",
  description: "Fitwear Catalogue",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialProducts = await fetchProductsServer();

  return (
    <ProductsContextProvider initialProducts={initialProducts}>
      <NavBar />
      {children}
    </ProductsContextProvider>
  );
}
