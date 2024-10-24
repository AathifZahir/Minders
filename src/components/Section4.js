import React from "react";

export default function Section4() {
  return (
    <div className="flex justify-between items-center mx-14 p-14 bg-[#CDA5D5] rounded-custl">
      <div className="w-1/2 mr-10">
        <div className="text-3xl opacity-50">Join our community</div>
        <div className="text-3xl">of talented artists</div>
        <div className="text-base mt-5">
          Are you an artist looking to showcase your work and connect with other
          creatives? Fill out our application form and join our community of
          talented artists. We can't wait to see what you have to offer.
        </div>
      </div>
      <div className="w-1/2">
        <form className="flex flex-col space-y-4 justify-center">
          <div className="border border-1 border-black p-3 rounded-xl flex flex-col">
            <label>Name</label>
            <input className="rounded-xl bg-[#CDA5D5] " type="text" />
          </div>
          <div className="border border-1 border-black p-3 rounded-xl flex flex-col">
            <label>Occupation</label>
            <input className="rounded-xl bg-[#CDA5D5] " type="text" />
          </div>
          <div className="border border-1 border-black p-3 rounded-xl flex flex-col">
            <label>Phone</label>
            <input className="rounded-xl bg-[#CDA5D5] " type="phone" />
          </div>
          <div className="border border-1 border-black p-3 rounded-xl flex flex-col">
            <label>Email</label>
            <input className="rounded-xl bg-[#CDA5D5] " type="email" />
          </div>
          <div className="mt-4 bg-[#E8FE74] text-base px-12 py-4 rounded-xl transition-all inline-block">
            <a href="/">
              <img
                src="/svgs/backIcon.svg"
                alt="backicon"
                className="text-white inline mb-1"
              />
              <span className="text-base ml-2">Submit</span>
            </a>
          </div>
          <div>
            By clicking the button, you agree to our{" "}
            <span className="font-bold">terms and conditions.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
