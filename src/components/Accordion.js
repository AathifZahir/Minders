import React, { useState } from "react";

export function Accordion({ title, date, location, answer, link }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl ${
        accordionOpen
          ? "bg-gradient-to-l from-[#CDA5D5] via-[#FBE4FF] to-[#E8FE74]"
          : "bg-white"
      } p-0.5 my-3`}
    >
      <div className="bg-black rounded-2xl p-4">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="text-white flex justify-between items-center w-full p-3"
        >
          <span className="text-white text-3xl">{title}</span>

          {/* Use flex and fixed widths for consistent positioning */}
          <span className="flex items-center space-x-6 w-auto">
            {/* Date Section */}
            <span
              className="text-white text-base flex items-center"
              style={{ width: "120px" }}
            >
              <img src="/svgs/acc1.svg" alt="date" className="mr-2" />
              <span className="whitespace-nowrap">{date}</span>
            </span>

            {/* Location Section */}
            <span
              className="text-white text-base flex items-center"
              style={{ width: "120px" }}
            >
              <img src="/svgs/acc2.svg" alt="location" className="mr-2" />
              <span className="whitespace-nowrap">{location}</span>
            </span>

            {/* More/Less Toggle */}
            <span className="text-white text-base flex items-center">
              <span>{accordionOpen ? "less" : "more"}</span>
              <img
                src={
                  accordionOpen ? "/svgs/uparrow.svg" : "/svgs/downarrow.svg"
                }
                alt={accordionOpen ? "uparrow" : "downarrow"}
                className="ml-1"
              />
            </span>
          </span>
        </button>

        {/* Answer Section */}
        <div
          className={`overflow-hidden transition-all ease-in-out duration-300 text-slate-500 ${
            accordionOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-3 text-white text-base">{answer}</div>
          <div className="text-base px-4 py-2 rounded-xl transition-all inline-block">
            <a href={link}>
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
