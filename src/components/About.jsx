import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className=" bg-linear-to-b from-primary/20">
      <div className="my-48 max-w-7xl mx-auto px-5  pt-10">
        <h2 className="text-secondary text-2xl text-center font-semibold">
          About
        </h2>
        <h1 className="lg:text-4xl text-3xl text-center font-bold lg:w-1/2 mx-auto mt-4">
          Our Commitment to Flawless Execution
        </h1>
        <div className="flex justify-center flex-col-reverse lg:flex-row items-center mt-10">
          {/* left side text*/}
          <div className="lg:w-1/2 text-center lg:text-left lg:items-start justify-center flex flex-col gap-5">
            <h1 className="text-3xl lg:w-5/6 w-full font-bold">
              Our Commitment to Flawless Execution
            </h1>
            <p className="lg:w-5/6 ">
              At Momentum, we believe that every gathering—from corporate
              conferences to intimate weddings—is an opportunity to create
              something truly exceptional. We are more than just event managers;
              we are the architects of atmosphere and the curators of connection
            </p>
            <button className="btn w-1/2 lg:w-auto mx-auto lg:mx-0 btn-primary text-white rounded-full">
              Contact
            </button>
          </div>
          {/* right side cards */}
          <div>
            <Image
              src="/organizers/newEvent.png"
              alt="about photo"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
