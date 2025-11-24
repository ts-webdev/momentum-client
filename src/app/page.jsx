import Banner from "@/components/Banner";
import EventOrganizer from "@/components/EventOrganizer";
import WhatWeOffer from "@/components/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <WhatWeOffer/>
      <EventOrganizer/>
    </main>
  );
}
