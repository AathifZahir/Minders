import React from "react";
import { Accordion } from "./Accordion";

export default function Section3() {
  const eventList = [
    {
      title: "Tech Summit",
      date: "05 Jun",
      location: "Boston",
      answer: "Join us for a day of insights, networking, and innovation.",
      link: "/",
    },
    {
      title: "AI Workshop",
      date: "21 Aug",
      location: "San",
      answer: "Learn the latest in AI. Hands-on sessions included.",
      link: "/",
    },
    {
      title: "Startup Expo",
      date: "15 Oct",
      location: "Chicago",
      answer: "Meet inspiring founders and investors. Gain new perspectives.",
      link: "/",
    },
    {
      title: "Marketing 101",
      date: "07 Dec",
      location: "Miami",
      answer: "Discover essential marketing strategies. Stay ahead of trends.",
      link: "/",
    },
  ];

  return (
    <div className="bg-black py-14 mx-28 pb-14 ">
      <div className="mt-12">
        <h2 className="text-5xl text-white opacity-50 ">
          The creative minds that
        </h2>
        <h2 className="text-5xl text-white ">power our projects</h2>
      </div>
      <div className="mt-12">
        {eventList.map((event, index) => (
          <Accordion
            key={index}
            title={event.title}
            date={event.date}
            location={event.location}
            answer={event.answer}
            link={event.link}
          />
        ))}
        <div className="mt-4 bg-[#CDA5D5] text-base px-12 py-4 rounded-xl transition-all inline-block">
          <a href="/">
            <img
              src="/svgs/backIcon.svg"
              alt="backicon"
              className="text-white inline mb-1"
            />
            <span className="text-base ml-2">View Calendar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
