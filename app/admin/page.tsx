"use client";

import { useEffect, useState } from "react";
import ProductsGrid from "@/components/products-grid/ProductsGrid";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import EditProductWindow from "@/components/admin-components/EditProductWindow";
import LogOutButton from "@/components/admin-components/LogOutButton";
import LoadingPage from "@/components/index-static/LoadingPage";

export default function AdminMain() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/");
    }
  }, [loading, session, router]);

  if (loading || !session) return <LoadingPage />;

  return (
    <div className="page">
      {/* Add Product Modal */}
      {isAdding && (
        <>
          <div
            className="fixed inset-0 bg-wise-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsAdding(false)}
          />
          <EditProductWindow
            setIsAdding={setIsAdding}
            editableProduct={null}
            addOrUpdate="add"
          />
        </>
      )}

      {/* Page Header */}
      <div className="px-6 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <h1
            className="
              wise-display-section text-wise-black
              max-sm:text-[3rem] sm:text-[4rem]
              leading-[0.85] mb-6
            "
          >
            Product <span className="text-wise-green">Manager</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="wise-body text-wise-warm-dark max-w-md">
              Manage your product catalog. Add, edit, or remove products as
              needed.
            </p>

            <button
              onClick={() => setIsAdding(true)}
              className="
                wise-button-primary
                focus:outline-none focus:ring-2 focus:ring-wise-green-dark focus:ring-offset-2
                flex items-center gap-2
              "
            >
              <span className="text-lg">+</span>
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <ProductsGrid />

      {/* Log Out Button */}
      <LogOutButton />
    </div>
  );
}
