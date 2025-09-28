import React, { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState<string>("Home");

  const links = ["Home", "Find Work", "Find Talent", "About Us", "Support"];

  return (
    <div className="flex justify-center items-center gap-[0.75vw] text-[1vw] text-white">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => setSelected(link)}
          className={`flex justify-center items-center px-[1.5vw] py-[0.4vw] min-w-[7vw] border transition-all duration-300 cursor-pointer dark:shadow-[0_0_30px_0_rgba(0,0,0,0.2)] shadow-[0_0_30px_0_rgba(0,0,0,0.06)] ${
            selected === link
              ? "dark:bg-blue-400 bg-blue-500 dark:border-blue-400 border-blue-500"
              : "dark:bg-neutral-900 bg-neutral-200 dark:text-white text-black border-neutral-700 dark:hover:bg-neutral-700 hover:bg-neutral-300"
          }`}
        >
          <span className="">{link}</span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
