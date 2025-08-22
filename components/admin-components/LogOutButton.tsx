"use client";

import { useAuth } from "@/contexts/AuthContext";
import { LogOutIcon } from "lucide-react";
import React from "react";

function LogOutButton() {
  const { logout } = useAuth();
  return (
    <button
      onClick={logout}
      className="px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow-sm hover:shadow-md hover:bg-primary/10 hover:text-primary transition-all duration-200"
    >
      <LogOutIcon /> Log out
    </button>
  );
}

export default LogOutButton;
