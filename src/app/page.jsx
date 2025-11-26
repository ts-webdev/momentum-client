import About from "@/components/About";
import Banner from "@/components/Banner";
import EventOrganizer from "@/components/EventOrganizer";
import LatestNews from "@/components/LatestNews";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <WhatWeOffer/>
      <EventOrganizer/>
      <LatestNews/>
      <About/>
     
    </main>
  );
}
