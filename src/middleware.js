import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  // Check auth token
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // If no user → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user exists → allow
  return NextResponse.next();
}

// Protect routes
export const config = {
  matcher: ["/add-event/:path*", "/manage/:path*"],
};
