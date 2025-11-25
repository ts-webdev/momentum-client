import Link from "next/link";
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function EventCard2({event}) {

  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 transform transition-all duration-300">
      <figure>
        <img
          src="/demo.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{event.title}</h2>
        <p>
          {event.shortDescription}..
        </p>
        <div className="flex items-center justify-between mt-5">
          <p className="text-xl font-semibold flex items-center">Price: <FaBangladeshiTakaSign className="ml-2" />
 {event.price}/-</p>
          <Link href={`all-events/${event._id5}`} className="btn btn-primary text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
}
