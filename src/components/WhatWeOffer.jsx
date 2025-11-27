import React from "react";
import EventCard from "./EventCard";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import EventCard2 from "./EventCard2";

export default async function WhatWeOffer() {
  const res = await fetch("http://localhost:3000/events/latest")
  const events = await res.json()
  return (
    <div className="my-48 max-w-7xl mx-auto px-5">
      <h2 className="text-secondary text-2xl text-center font-semibold">Recent Events</h2>
      <h1 className="lg:text-4xl text-3xl text-center font-bold lg:w-1/2 mx-auto mt-4">
        Our Recent Wedding Event Management Services
      </h1>
      <div className="hidden lg:block mt-10">
        <Marquee className="py-3 grid grid-cols-3 gap-10" pauseOnHover={true}>
          {
            events.map(event => <div className="mx-10 w-96" key={event._id}><EventCard2 event={event} /></div>)
          }
        </Marquee>
      </div>
      <div className="lg:hidden block mt-10">
        <div className="py-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {
            events.map(event => <div key={event._id}><EventCard2 event={event} /></div>)
          }
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/all-events" className="mt-10 btn btn-primary rounded-full text-white">Show All Events</Link>
      </div>
    </div>
  );
}
