"use client";

import { useEffect, useState } from "react";
import cn from "@/lib/utils";

export default function CategoryBar() {
  const [activeCateg, setActiveCateg] = useState("All");

  const handleActiveCateg = (categ: string) => {
    categ === "All" ? setActiveCateg("All") : setActiveCateg(categ);
  };

  useEffect(() => {
    if (activeCateg === "All") {
    } else {
    }
  }, [activeCateg]);

  return (
    <div
      className="flex justify-center gap-4 flex-wrap scroll-mt-30 py-6 px-9"
      id="product"
    ></div>
  );
}
