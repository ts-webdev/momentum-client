"use client";

import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await signIn("credentials", {
        redirect: false, // 🔹 must be false to catch errors
        email,
        password,
      });

      if (res?.error) {
        alert(res.error);
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full mt-4">Login</button>
        </form>

        <div className="flex justify-between items-center gap-2 my-3">
          <div className="border h-0 w-1/2 border-gray-300"></div>
          <span>or</span>
          <div className="border h-0 w-1/2 border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          className="btn bg-white w-full text-black border-[#e5e5e5]"
        >
          Login with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
