"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ActiveLink({href, children}) {
    const pathName = usePathname()
    const isActive = pathName === href;
  return (
    <Link
    href={href}
    className={isActive ? "btn bg-[#ff6ad5] border-none mx-1 rounded-full text-white" : "btn btn-ghost mx-1 rounded-full"}>
      {children}
    </Link>
  )
}
