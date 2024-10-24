import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="bg-black">
          <Title />
        </div>

        <div className="bg-black">
          <Section1 />
        </div>
        <div className="bg-[#E8FE74]">
          <Section2 />
        </div>
        <div className="bg-black">
          <Section3 />
        </div>
        <div className="bg-black">
          <Section4 />
        </div>
      </div>
      <Footer />
    </div>
  );
}
