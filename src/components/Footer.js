import React from "react";

export default function Footer() {
  return (
    <div className="bg-black py-10 pt-20 flex flex-1 justify-center">
      <div className="mx-10">
        <div className="text-white mb-6">Join Us:</div>
        <div className="text-white hover:underline mb-2">
          <a href="/">Instagram</a>
        </div>
        <div className="text-white hover:underline mb-2">
          <a href="/">Facebook</a>
        </div>
        <div className="text-white hover:underline mb-2">
          <a href="/">Youtube</a>
        </div>
      </div>
      <div className="inline bg-white opacity-25 w-0.5 self stretch"></div>
      <div className="mx-10">
        <div className="text-white mb-6">Contact Us:</div>
        <div className="text-white mb-2 hover:underline">+1 (555) 555-5555</div>
        <div className="text-white mb-2 hover:underline">
          Support@example.com
        </div>
      </div>
      <div className="inline bg-white opacity-25 w-0.5 self stretch"></div>
      <div className="w-1/2 mx-10">
        <p className="text-white">
          The information on this website is provided for general informational
          purposes only and does not constitute legal or professional advice.
          The information is accurate to the best of our knowledge for USA law.
          Use of this website constitutes acceptance of our Terms of Use and
          Privacy Policy.
        </p>
        <p className="text-white mt-6">
          All rights reserved. ©2021-2023 Minders.
        </p>
      </div>
    </div>
  );
}
