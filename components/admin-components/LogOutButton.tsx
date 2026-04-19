"use client";

import { useAuth } from "@/contexts/AuthContext";
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
      className="
        absolute right-6 top-6
        px-5 py-2
        rounded-full font-semibold
        border-2 border-[#d03238]
        text-[#d03238]
        hover:bg-[#d03238] hover:text-white
        transition-all duration-200
        flex items-center gap-2
        focus:outline-none focus:ring-2 focus:ring-[#d03238] focus:ring-offset-2
      "
    >
      <LogOut size={18} />
      <span>Log Out</span>
    </button>
  );
}

export default LogOutButton;
