import React from "react";
import { Carousel } from "./Carousel";

export default function Section2() {
  return (
    <div className="bg-[#E8FE74] py-12">
      <div>
        <h2 className="text-5xl opacity-50 mx-28">The creative minds that</h2>
        <h2 className="text-5xl mx-28">power our projects</h2>
      </div>

      {/* Add margin or space below the drag element */}
      <div className="absolute right-10 bottom-[-60rem] rounded-full h-32 w-32 bg-white z-30 flex justify-center items-center">
        <img src="/svgs/dl.svg" className="inline" />
        <span className="px-2">Drag</span>
        <img src="/svgs/dr.svg" className="inline" />
      </div>

      <div className="my-10 mt-12 ml-28">
        <Carousel />
      </div>
    </div>
  );
}
