import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Carousel() {
  const teamMembers = [
    {
      img: "images/members/tm (1).png",
      name: "Ava Johnson",
      job: "Project Manager",
      description:
        "At Minders, I get to work on diverse projects with talented individuals. The collaborative atmosphere allows us to achieve our goals efficiently while having fun.",
    },
    {
      img: "images/members/tm (2).png",
      name: "Jordan Smith",
      job: "Front-End Developer",
      description:
        "Working at Minders has been a game-changer for my career. The team encourages creative problem-solving and keeps me motivated to push the boundaries of web design and development.",
    },
    {
      img: "images/members/tm (3).png",
      name: "Cary Bennet",
      job: "Lead Designer",
      description:
        "I love working at Minders. It's an incredibly dynamic and supportive creative community that fosters collaboration and innovation, leading to truly exceptional design work.",
    },
    {
      img: "images/members/tm (4).png",
      name: "Emma Williams",
      job: "Content Strategist",
      description:
        "I thrive in the creative environment at Minders. The support from my colleagues inspires me to craft compelling narratives that resonate with our audience.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.name} className="relative">
            <div className="overflow-hidden rounded-custl2 h-auto w-80">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col h-auto w-80 items-center rounded-custl2 justify-center backdrop-blur-sm bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-2xl font-bold">{member.name}</div>
              <div className="text-white text-xl">{member.job}</div>
              <div className="my-5 text-white text-base px-4 text-center">
                {member.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
