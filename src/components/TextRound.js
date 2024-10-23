import React from "react";

export default function TextRound({ text, state }) {
  return (
    <div
      className={`inline-flex w-auto rounded-full ${
        state === "grad"
          ? "bg-gradient-to-r from-[#CDA5D5] via-[#FBE4FF] to-[#E8FE74] p-[0.15rem]"
          : state === "transparent"
          ? "bg-white border border-white p-[0.0625rem] opacity-50"
          : "bg-white border border-white p-[0.0625rem]"
      }`}
    >
      <div className="flex h-full w-full items-center justify-center bg-black rounded-full p-3">
        <div
          className={`flex items-center justify-center ${
            state === "grad"
              ? "text-transparent text-xl font-semibold bg-clip-text bg-gradient-to-r from-[#CDA5D5] via-[#FBE4FF] to-[#E8FE74]"
              : state === "transparent"
              ? "text-white opacity-50 text-xl"
              : "text-white text-xl"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
