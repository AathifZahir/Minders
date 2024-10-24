import React, { useState } from "react";

export function Accordion({ title, date, location, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`rounded-xl ${
        accordionOpen
          ? "bg-gradient-to-r from-[#CDA5D5] via-[#FBE4FF] to-[#E8FE74]"
          : "bg-white"
      }  p-0.5`}
    >
      <div className="bg-black rounded-xl">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="text-white flex justify-between w-full p-3"
        >
          <span className="text-white">{title}</span>
          <span className="flex justify-between space-x-5">
            <span className="text-white flex">
              <img src="/svgs/acc1.svg" alt="date" className="mr-3" />
              {date}
            </span>
            <span className="text-white flex">
              <img src="/svgs/acc2.svg" alt="location" className="mr-3" />
              {location}
            </span>
            {accordionOpen ? (
              <img src="/svgs/downarrow.svg" alt="downarrow" />
            ) : (
              <img src="/svgs/uparrow.svg" alt="downarrow" />
            )}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all ease-in-out duration-300 text-slate-500 ${
            accordionOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-3 text-white">{answer}</div>
          <div className=" text-base px-4 py-2 rounded-xl transition-all inline-block">
            <a href="#">
              <img
                src="/svgs/crarrow.svg"
                alt="backicon"
                className="text-white inline mb-1"
              />{" "}
              <span className="text-base ml-2 text-[#CDA5D5]">Join us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
