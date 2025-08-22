import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import { ProductsContextProvider } from "@/contexts/ProductsContext";
import { ReactQueryProvider } from "@/contexts/QueryProvider";
import { fetchProductsServer } from "@/lib/fetchAllProducts";

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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <ReactQueryProvider>
          <ProductsContextProvider initialProducts={initialProducts}>
            <NavBar />
            {children}
          </ProductsContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
