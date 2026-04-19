import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
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
      <head>
        {/* Wise Sans will be loaded via local font or CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Wise Sans';
                src: local('Wise Sans'), local('Inter');
                font-weight: 900;
                font-style: normal;
                font-display: swap;
              }
            `,
          }}
        />
      </head>

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
                      background: 'var(--color-wise-black)',
                      color: 'var(--color-wise-green)',
                      fontFamily: 'Inter, sans-serif',
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
