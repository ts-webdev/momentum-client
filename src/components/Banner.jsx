"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <section className="min-h-[70vh]">
      <div className="flex justify-center flex-col items-center">
        <Marquee className="text-7xl font-black py-3 text-primary pt-20">
          Creating Unforgettable Moments|<span className="text-blue-700"> Perfect Weddings Made Easy! | </span>
        </Marquee>

        <div className="-mt-30 z-50">
          <Image
            src="/couple.png"
            alt="banner couple image"
            height={0}
            width={700}
          />
        </div>
      </div>
    </section>
  );
}
