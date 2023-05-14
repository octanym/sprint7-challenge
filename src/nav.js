import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between mx-5 my-5">
      <h1 className="w-56 mx-24 font-Inconsolata text-center text-3xl text-red-500 font-bold">
        Bloomtech Eats
      </h1>
      <div className="flex border mx-5">
        <Link to="/">
          <button className="px-12 min-h-full bg-black text-white">Home</button>
        </Link>
        <Link>
          <button className="px-12 min-h-full">Help</button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
