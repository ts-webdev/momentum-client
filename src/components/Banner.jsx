
import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="min-h-[70vh]">
      <div className="flex justify-around   pt-7 items-center">
        <div className=" w-2/3 relative">
          <h1 className="text-6xl w-1/2 font-black text-primary">
            Creating Unforgettable Moments
          </h1>
          <p className="text-gray-500 w-2/3 mt-5">
            Dedicated to delivering an absolutely flawless and luxurious wedding
            experience, our expert team manages every complexity with
            unparalleled grace, leaving you free to immerse yourselves in the
            magic of your most important day.
          </p>
          <div className="absolute top-0 right-10  ">
            <Image src="/tag.png" height={0} width={102} alt="tag"/>
          </div>
        </div>
        <div className="">
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
