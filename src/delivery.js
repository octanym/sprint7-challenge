import React from "react";
import Restaurants from "./restaurants";
import { restaurants } from "./data";

const Delivery = () => {
  return (
    <div className="mt-8 mx-12 my-5">
      <div className="flex justify-between my-4">
        {restaurants.map((rest, index) => (
          <Restaurants key={index} restaurant={rest} />
        ))}
      </div>
      <hr className="bg-black h-1 mt-12" />
    </div>
  );
};

export default Delivery;
