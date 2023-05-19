import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[75vh] bg-header-image bg-cover">
      <h2 className="text-5xl">Your favorite food, delivered while coding</h2>
      <Link to="/pizza">
        <button
          className="px-10 py-2 my-10 text-lg border border-black"
          id="order-pizza"
        >
          Pizza?
        </button>
      </Link>
    </div>
  );
};

export default Header;
