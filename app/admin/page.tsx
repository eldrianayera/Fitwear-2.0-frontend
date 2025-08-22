"use client";

import { useEffect, useState } from "react";
import ProductsGrid from "@/components/products-grid/ProductsGrid";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import cn from "@/lib/utils";
import EditProductWindow from "@/components/admin-components/EditProductWindow";

export default function AdminMain() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const { session, loading } = useAuth();
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/"); //
    }
  }, [loading, session, router]);

  if (loading || !session) return <p>Loading...</p>;

  return (
    <div className="page">
      {isAdding && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsAdding(false)}
          />
          {/* Modal itself */}
          <EditProductWindow setIsAdding={setIsAdding} />
        </>
      )}
      <button
        onClick={logout}
        className={cn(
          "px-5 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-sm hover:shadow-md flex gap-2 justify-center",
          "hover:bg-red-500/10 hover:text-red-500 transition-all duration-200 w-40 absolute right-5 top-2"
        )}
      >
        <LogOut /> Log Out
      </button>
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
