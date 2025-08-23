"use client";

import { useEffect, useState } from "react";
import ProductsGrid from "@/components/products-grid/ProductsGrid";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import EditProductWindow from "@/components/admin-components/EditProductWindow";
import LogOutButton from "@/components/admin-components/LogOutButton";
import LoadingPage from "@/components/index-static/LoadingPage";
import SearchBar from "@/components/navbar/SearchBar";

export default function AdminMain() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/"); //
    }
  }, [loading, session, router]);

  if (loading || !session) return <LoadingPage />;

  return (
    <div className="page">
      {isAdding && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsAdding(false)}
          />
          <EditProductWindow
            setIsAdding={setIsAdding}
            editableProduct={null}
            addOrUpdate="add"
          />
        </>
      )}

      <div className="w-90 absolute top-2 left-1/2 -translate-x-1/2 z-30">
        <SearchBar isAdmin={false} />
      </div>

      <LogOutButton />
      <div className="flex justify-center my-6">
        <button
          onClick={() => setIsAdding(true)}
          className="px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow-sm hover:shadow-md hover:bg-primary/10 hover:text-primary transition-all duration-200"
        >
          ➕ Add a New Product
        </button>
      </div>
      <ProductsGrid />
    </div>
  );
}
