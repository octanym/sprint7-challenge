import React from "react";

const Restaurants = (props) => {
  return (
    <div className="w-[30%]">
      <div className="h-52 bg-gradient-to-br from-gray-500 to-gray-200"></div>
      <h3 className="text-lg">{props.restaurant.name}</h3>
      {props.restaurant.cuisine.map((cuis) => (
        <span>{cuis} - </span>
      ))}
      <div className="mt-2">
        <span className="px-1 py-1 border border-black">
          {props.restaurant.time}
        </span>
        &nbsp;
        <span className="px-1 py-1 border border-black">
          {props.restaurant.fee}
        </span>
      </div>
    </div>
  );
};

export default Restaurants;
