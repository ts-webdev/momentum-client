"use client";

import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  

  const { data: session, status } = useSession();
  console.log(session);
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = {name, email, password}
    console.log(newUser)
    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newUser)
    })
    const data = await res.json();
    alert(data.message);
    if (res.status === 201) {
      window.location.href = "/login";
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-200 shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>
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

          <button className="btn btn-primary text-white w-full mt-4">Register</button>
        </form>
        <div className="flex justify-between items-center gap-2 my-3">
          <div className="border h-0 w-1/2 border-gray-300"></div>
          <span>or</span>
          <div className="border h-0 w-1/2 border-gray-300"></div>
        </div>
        <button
          onClick={() => signIn("google")}
          className="btn bg-white w-full text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
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
