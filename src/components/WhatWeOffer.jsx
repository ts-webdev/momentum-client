import React from "react";
import EventCard from "./EventCard";
import Marquee from "react-fast-marquee";

export default function WhatWeOffer() {
  return (
    <div className="my-48">
      <h2 className="text-[#CDB4DB] text-2xl text-center">What We Offer</h2>
      <h1 className="text-4xl text-center font-bold w-1/2 mx-auto mt-4">
        Our Wedding Event Management Services Include
      </h1>
      <div className="mt-10">
        <Marquee pauseOnHover={true}>
          <EventCard />
          <EventCard />
          <EventCard />
        </Marquee>
      </div>
      <button className="mt-10 btn btn-primary rounded-full">Show All</button>
    </div>
  );
}
