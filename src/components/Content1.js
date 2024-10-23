import React from "react";

export default function Content1() {
  return (
    <div className="my-10 mx-14">
      <div>
        <div className="text-white/40 text-5xl">Showcasing diversity</div>
        <div className="text-white text-5xl">and promoting artists</div>
      </div>
      <div className="my-5 text-white text-base">
        Our community is made up of talented artists from around the world who
        share a common passion for contemporary art. We seek to showcase the
        diversity of artistic expressions and provide a platform for emerging
        artists to promote their work. With a focus on collaboration and
        innovation, we strive to push the boundaries of creativity and inspire
        future generations of artists.
      </div>

      <div className="my-10">
        <a
          href="/"
          className="bg-[#CDA5D5] text-base px-12 py-4 rounded-xl transition-all"
        >
          <img
            src="/svgs/backIcon.svg"
            alt="backicon"
            className="text-white inline mb-1"
          />
          <span className="text-base ml-2">Join us</span>
        </a>
      </div>
    </div>
  );
}
