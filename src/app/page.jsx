import Banner from "@/components/Banner";
import WhatWeOffer from "@/components/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5">
      <Banner/>
      <WhatWeOffer/>
    </main>
  );
}
