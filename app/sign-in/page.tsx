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
    <div className="min-h-screen bg-wise-surface flex items-center justify-center px-6">
      <div
        className="
          w-full max-w-md
          wise-card-large
          bg-wise-white
          p-10 lg:p-12
        "
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="
              wise-display-hero text-wise-black
              max-sm:text-[4rem]
              leading-[0.85] mb-3
            "
          >
            Admin
          </h1>
          <p className="wise-body text-wise-gray">
            Sign in to manage your products
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="wise-caption text-wise-gray block mb-2"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="w-full wise-input"
              value={username}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="wise-caption text-wise-gray block mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full wise-input"
              value={password}
              required
            />
          </div>

          <button
            type="submit"
            className="
              wise-button-primary w-full
              focus:outline-none focus:ring-2 focus:ring-wise-green-dark focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="
              wise-body-semibold text-wise-gray
              hover:text-wise-green
              transition-colors duration-200
            "
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
