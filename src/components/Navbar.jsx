"use client"
import React from "react";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const links = (
    <>
      <li>
        <ActiveLink href="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/all-events">All Events</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/blogs">Blogs</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto px-5 navbar sticky z-100 top-3 bg-white/90 mt-7 shadow-sm rounded-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl font-bold flex gap-1">
          {" "}
          <Image
            src="/logo.png"
            height={10}
            width={30}
            alt="momentum logo"
          />{" "}
          Momentum
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {session ? (
        <div className="navbar-end">
          
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border" title={session.user.name}>
                <Image
                  alt="User Photo"
                  src={session?.user?.image}
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/add-event" className="justify-between">
                  Add Event
                </Link>
              </li>
              <li>
                <Link href='/manage'>Manage Events </Link>
              </li>
              <li onClick={()=>signOut()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link href="/login" className="btn btn-outline btn-primary rounded-full">Login</Link>
          <Link href="/register" className="btn btn-primary text-white ml-2 rounded-full">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
