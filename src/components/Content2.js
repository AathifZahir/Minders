import React from "react";
import TextRound from "./TextRound";

export default function Content2() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center space-x-8">
        <span className="m-2 mx-4">
          <TextRound text="photography" state="transparent" />
        </span>
        <span className="m-4 mx-2">
          <TextRound text="music" state="transparent" />
        </span>
      </div>
      <div className="flex flex-wrap justify-center space-x-7">
        <span className="m-3 mr-15 -mt-1">
          <TextRound text="AI art" state="transparent" />
        </span>
        <span className="m-2">
          <TextRound text="poetry" state="" />
        </span>
        <span className="m-4">
          <TextRound text="architecture" state="" />
        </span>
      </div>
      <div className="flex flex-wrap justify-center space-x-8">
        <span className="m-0">
          <TextRound text="handmade" state="" />
        </span>
        <span className="m-4">
          <TextRound text="performance" state="grad" />
        </span>
        <span className="m-1">
          <TextRound text="dance" state="transparent" />
        </span>
      </div>
      <div className="flex flex-wrap justify-center space-x-8">
        <span className="m-1 mr-4">
          <TextRound text="design" state="transparent" />
        </span>
        <span className="m-2">
          <TextRound text="fashion" state="transparent" />
        </span>
      </div>
    </div>
  );
}
