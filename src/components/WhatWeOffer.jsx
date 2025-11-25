import React from "react";
import EventCard from "./EventCard";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function WhatWeOffer() {
  return (
    <div className="my-48 max-w-7xl mx-auto px-5">
      <h2 className="text-secondary text-2xl text-center font-semibold">What We Offer</h2>
      <h1 className="text-4xl text-center font-bold w-1/2 mx-auto mt-4">
        Our Wedding Event Management Services Include
      </h1>
      <div className="mt-10">
        <Marquee className="py-3 grid grid-cols-3 gap-10" pauseOnHover={true}>
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
          <div>
            <EventCard />
          </div>
        </Marquee>
      </div>
      <div className="flex justify-center">
        <Link href="/all-events" className="mt-10 btn btn-primary rounded-full text-white">Show All Events</Link>
      </div>
    </div>
  );
}
