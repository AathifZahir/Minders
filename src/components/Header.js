import React from "react";

export default function Header() {
  const navLinks = [
    { title: "About us", link: "/" },
    { title: "Our team", link: "/" },
    { title: "Events", link: "/" },
  ];

  return (
    <nav className="bg-black">
      <div className="flex justify-between items-center p-6 mx-14">
        <div>
          <span className="text-white font-schibsted text-3xl">MINDERS</span>
        </div>
        <div className="w-auto">
          <ul className="flex space-x-8">
            {navLinks.map((navItem, Index) => (
              <li key={Index}>
                <a
                  href="{navItem.link}"
                  className="text-white block text-xl font-schibsted"
                >
                  {navItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
