import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import { ProductsContextProvider } from "@/contexts/ProductsContext";
import { ReactQueryProvider } from "@/contexts/QueryProvider";
import { fetchProductsServer } from "@/lib/fetchAllProducts";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { AdminContextProvider } from "@/contexts/AdminContext";
import { Toaster } from "sonner";

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
        <AuthContextProvider>
          <ReactQueryProvider>
            <AdminContextProvider>
              <ProductsContextProvider initialProducts={initialProducts}>
                {children}
                <Toaster position="top-center" richColors />
              </ProductsContextProvider>
            </AdminContextProvider>
          </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
