"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/admin");
    }
  }, [session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
        <form
          className="flex flex-col gap-4 w-full max-w-md p-8 border-2 rounded-lg shadow-md bg-white"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="border-2 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            value={username}
            required
          />

          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border-2 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-primary text-white rounded-md py-2 font-semibold hover:bg-primary/90 transition-colors"
            disabled={loading}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
