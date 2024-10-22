import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Section1 from "../components/Section1";

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
      </div>
    </div>
  );
}
