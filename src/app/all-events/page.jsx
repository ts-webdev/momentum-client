import EventCard2 from "@/components/EventCard2";
import React from "react";

export default async function allEvents() {
  const res = await fetch("http://localhost:3000/events")
  const events = await res.json()
  return (
    <div className="max-w-7xl mx-auto px-5 mt-10">
      <h1 className="text-4xl text-center font-bold w-1/2 mx-auto">
        Discover Your Next Unforgettable Event
      </h1>
      <p className="text-secondary mt-4 text-center font-semibold mb-20">
        Your journey to creating a spectacular memory starts here.
      </p>
      {/* drop down and search */}
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="w-2/3">
          <input
            type="text"
            placeholder="Search"
            className="input input-primary"
          />
        </div>
        {/* Drop down */}
        <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Click ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* all Cards */}
      <div className="grid grid-cols-3 gap-10 my-10">
       {
        events.map(event=> <EventCard2 key={event._id} event={event}/>)
       }
      </div>
      <p className="text-center my-5 text-xl">Total <span className="text-primary font-bold">{events.length}</span> Events Found.</p>
    </div>
  );
}
