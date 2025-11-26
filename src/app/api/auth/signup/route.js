// app/api/auth/signup/route.js
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await dbConnect();

    const { name, email, password } = await req.json();

    
    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email and password required" }), { status: 400 });
    }

    
    const existing = await User.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

   
    const hashed = await bcrypt.hash(password, 10);

  
    const user = await User.create({
      name,
      email,
      password: hashed,
      provider: "credentials",
    });

    return new Response(JSON.stringify({ message: "User created", userId: user._id }), { status: 201 });
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
