import React from "react";
import { Carousel } from "./Carousel";

export default function Section2() {
  return (
    <div className="bg-[#E8FE74] py-4  ">
      <div>
        <h2 className="text-5xl opacity-50 mx-28">The creative minds that</h2>
        <h2 className="text-5xl mx-28">power our projects</h2>
      </div>
      <div className="my-10 ml-28">
        <Carousel />
      </div>
    </div>
  );
}
