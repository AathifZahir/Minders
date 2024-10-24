import React from "react";

export default function Section4() {
  return (
    <div className="flex justify-between items-center mx-14 p-14 py-20 bg-[#CDA5D5] rounded-custl">
      <div className="w-1/2 mr-20">
        <div className="text-5xl opacity-50">Join our community</div>
        <div className="text-5xl">of talented artists</div>
        <div className="text-base mt-5 font-semibold mr-20">
          Are you an artist looking to showcase your work and connect with other
          creatives? Fill out our application form and join our community of
          talented artists. We can't wait to see what you have to offer.
        </div>
      </div>

      <div className="w-1/2">
        <form className="flex flex-col">
          <div className="relative w-full mb-2">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="block w-full px-4 pt-9 pb-2 text-base text-black bg-[#CDA5D5] border border-2 border-black border-opacity-25 rounded-3xl focus:outline-none focus:border-black-500"
            />
            <label
              htmlFor="name"
              className="absolute top-0.5 left-4 px-1 pt-3 text-base opacity-50 transition-all duration-200 ease-in-out transform scale-100"
            >
              Name
            </label>
          </div>
          <div className="relative w-full mb-2">
            <input
              type="text"
              id="occupation"
              placeholder=" "
              className="block w-full px-4 pt-9 pb-2 text-base text-black bg-[#CDA5D5] border border-2 border-black border-opacity-25 rounded-3xl focus:outline-none focus:border-black-500"
            />
            <label
              htmlFor="occupation"
              className="absolute top-0.5 left-4 px-1 pt-3 text-base opacity-50 transition-all duration-200 ease-in-out transform scale-100"
            >
              Occupation
            </label>
          </div>
          <div className="relative w-full mb-2">
            <input
              type="tel"
              id="phone"
              placeholder=" "
              className="block w-full px-4 pt-9 pb-2 text-base text-black bg-[#CDA5D5] border border-2 border-black border-opacity-25 rounded-3xl focus:outline-none focus:border-black-500"
            />
            <label
              htmlFor="phone"
              className="absolute top-0.5 left-4 px-1 pt-3 text-base opacity-50 transition-all duration-200 ease-in-out transform scale-100"
            >
              Phone
            </label>
          </div>
          <div className="relative w-full mb-2">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="block w-full px-4 pt-9 pb-2 text-base text-black bg-[#CDA5D5] border border-2 border-black border-opacity-25 rounded-3xl focus:outline-none focus:border-black-500"
            />
            <label
              htmlFor="email"
              className="absolute top-0.5 left-4 px-1 pt-3 text-base opacity-50 transition-all duration-200 ease-in-out transform scale-100"
            >
              Email
            </label>
          </div>
          <div className="mt-8 bg-[#E8FE74] text-base px-12 py-4 rounded-xl transition-all block w-full text-center">
            <a href="/" className="flex justify-center items-center">
              <img
                src="/svgs/backIcon.svg"
                alt="backicon"
                className="text-white inline mb-1"
              />
              <span className="text-base ml-2 font-semibold">Apply</span>
            </a>
          </div>
          <div className="mt-8 ">
            <span className="opacity-50">
              By clicking the button, you agree to our{" "}
            </span>
            <span className="opacity-100">terms and conditions.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
