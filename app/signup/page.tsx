"use client"

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-3xl mb-4">Welcome to Magic UI</h2>
      <form onSubmit={handleSignup} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded bg-gray-800"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
          Sign Up with Email
        </button>
        <p>OR CONTINUE WITH</p>
        <Link href="/login">
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
            GitHub
          </button>
        </Link>
      </form>
      <Link href="/login" className="mt-4 text-blue-400">
        Already have an account? Log In
      </Link>
    </div>
  );
} 