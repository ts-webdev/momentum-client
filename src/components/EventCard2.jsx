
import React from "react";

export default function EventCard2({event}) {
  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 transform transition-all duration-300">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>
          {event.shortDescription}..
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
}
