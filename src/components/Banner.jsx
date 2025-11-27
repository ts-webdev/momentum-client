
import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
   <section className=" bg-linear-to-b from-primary/20 -mt-25 pt-25">
     <div className="min-h-[70vh] max-w-7xl mx-auto px-5">
      <div className="flex justify-around flex-col-reverse lg:flex-row  pt-15 items-center">
        <div className=" lg:w-2/3 relative">
          <h1 className="lg:text-6xl text-4xl text-center lg:text-left lg:w-1/2 font-black text-primary">
            Creating Unforgettable Moments
          </h1>
          <p className="text-gray-500 text-center lg:text-left lg:w-2/3 mt-5">
            Dedicated to delivering an absolutely flawless and luxurious wedding
            experience, our expert team manages every complexity with
            unparalleled grace, leaving you free to immerse yourselves in the
            magic of your most important day.
          </p>
          <div className="xl:block hidden absolute top-0 right-50 animate-[spin_15s_linear_infinite]  ">
            <Image src="/tag.png" height={0} width={102} alt="tag"/>
          </div>
        </div>
        <div className="w-1/2 md:2/3">
          <Image
            src="/couple.png"
            alt="banner couple image"
            height={0}
            width={700}
          />
        </div>
      </div>
    </div>
   </section>
  );
}
