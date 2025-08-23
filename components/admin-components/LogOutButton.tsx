"use client";

import { useAuth } from "@/contexts/AuthContext";
import cn from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const { logout, session } = useAuth();
  const router = useRouter();

  if (!session) return;

  const handleLogOut = () => {
    logout();
    router.replace("/");
  };

  return (
    <button
      onClick={handleLogOut}
      className={cn(
        "px-5 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-sm hover:shadow-md flex gap-2 justify-center",
        "hover:bg-red-500/10 hover:text-red-500 transition-all duration-200 w-40 absolute right-5 top-2"
      )}
    >
      <LogOut /> Log Out
    </button>
  );
}

export default LogOutButton;
