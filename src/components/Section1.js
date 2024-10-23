import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";

export default function Section1() {
  return (
    <div className="bg-black py-4 flex justify-between items-center mx-14 pb-14">
      <div className="w-1/2">
        <Content1 />
      </div>
      <div className="w-1/2">
        <Content2 />
      </div>
    </div>
  );
}
