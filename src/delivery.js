import React from "react";
import Restaurants from "./restaurants";
import { restaurants } from "./data";

const Delivery = () => {
  return (
    <div>
      {restaurants.map((rest, index) => (
        <Restaurants key={index} props={rest} />
      ))}
    </div>
  );
};

export default Delivery;
