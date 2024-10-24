import React from "react";
import { Accordion } from "./Accordion";

export default function Section3() {
  return (
    <div className="bg-black py-14 mx-28 pb-14 ">
      <div className="mt-12">
        <h2 className="text-5xl text-white opacity-50 ">
          The creative minds that
        </h2>
        <h2 className="text-5xl text-white ">power our projects</h2>
      </div>
      <div className="mt-12">
        <Accordion
          title="hello"
          date={"12 May"}
          location={"New york"}
          answer={"welcome to our"}
        />
      </div>
    </div>
  );
}
