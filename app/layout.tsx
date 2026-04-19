import type { Metadata } from "next";
import "./globals.css";
import { ProductsContextProvider } from "@/contexts/ProductsContext";
import { ReactQueryProvider } from "@/contexts/QueryProvider";
import { fetchProductsServer } from "@/lib/fetchAllProducts";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { AdminContextProvider } from "@/contexts/AdminContext";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";

// Inter for body text - weight 600 is default for Wise design
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fitwear",
  description: "Fitwear Catalogue - Performance Activewear",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialProducts = await fetchProductsServer();

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <AuthContextProvider>
          <ReactQueryProvider>
            <AdminContextProvider>
              <ProductsContextProvider initialProducts={initialProducts}>
                {children}
                <Toaster
                  position="top-center"
                  richColors
                  toastOptions={{
                    style: {
                      background: "var(--color-wise-black)",
                      color: "var(--color-wise-green)",
                      fontFamily: "Inter, sans-serif",
                    },
                  }}
                />
              </ProductsContextProvider>
            </AdminContextProvider>
          </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
