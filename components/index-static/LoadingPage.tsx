"use client";

import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-[400px] flex items-center justify-center px-6">
      <div
        className="
          flex flex-col items-center gap-6 p-10
          wise-card
          bg-wise-white
        "
        style={{ borderRadius: "30px" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-wise-green/20 rounded-full blur-xl"></div>
          <Loader2 className="relative h-12 w-12 text-wise-green animate-spin" />
        </div>
        <h2 className="wise-feature-title text-wise-black">
          Loading, please wait...
        </h2>
        <p className="wise-body text-wise-gray">
          We're preparing your experience
        </p>
      </div>
    </div>
  );
}
