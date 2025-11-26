import Image from "next/image";
import Link from "next/link";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";

import { MdArrowForwardIos } from "react-icons/md";

export default async function ViewDetails({ params }) {
  const { id } = await params;

  // Fetch the event data
  const res = await fetch(`http://localhost:3000/events/${id}`);
  const event = await res.json();
  console.log(event);

  return (
    <div className="">
      {/* Title */}
      <div className="bg-linear-to-b from-[#BDE0FE] pt-40 pb-20 -mt-25">
        <h1 className="text-5xl font-bold text-center">{event.title}</h1>
        <div className="flex justify-center items-center gap-3 mt-10">
          <Link href="/">Home</Link>

          <MdArrowForwardIos />
          <Link href="/all-events">All Events</Link>
          <MdArrowForwardIos />
          <p className="font-bold cursor-pointer">Event Details</p>
        </div>
      </div>
      {/* Description */}
      <div className="max-w-7xl mx-auto px-5 my-10">
        <div className="flex gap-7 justify-between items-center">
          {/* image */}
          <div className="w-1/2 ">
            <Image
              src={event.imageURL}
              alt={event.title}
              height={0}
              width={800}
              className="rounded-2xl border border-gray-300"
            />
          </div>
          {/* details */}
          <div className="w-1/2">
            <div className="flex justify-between items-center bg-[#FFC8DD] p-5 rounded-md">
                <p className="bg-white p-3 rounded-md font-bold flex items-center text-primary">Price: <FaBangladeshiTakaSign className="ml-2" /> {event.price}</p>
              <div>
                <p className="font-semibold">Priority : {event.priority}</p>
              </div>
            </div>
            <p className="pt-5 text-blue-500 font-semibold">Category : {event.category}</p>
            <h3 className="text-2xl font-semibold  mt-3">About this Event:</h3>
            <p>{event.fullDescription}</p>
            <div className="mt-5 flex justify-end">
              <button className="btn btn-primary text-white">Book Now</button>
            </div>
          </div>
        </div>
      <div className="flex justify-center mt-10">
        <Link href="/all-events" className="btn btn-info text-white "> <IoArrowBack className="mt-1" size={20} />
 Back to All Events</Link>
      </div>
      </div>
    </div>
  );
}
