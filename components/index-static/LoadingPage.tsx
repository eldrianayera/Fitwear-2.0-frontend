"use client";

import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-xl">
        <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
        <h2 className="text-lg font-semibold text-gray-700">
          Loading, please wait...
        </h2>
        <p className="text-sm text-gray-500">
          We’re preparing your experience ✨
        </p>
      </div>
    </div>
  );
}
