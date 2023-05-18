import React from "react";
import PizzaGif from "./Assets/DogWithPizza.gif";

const Confirmation = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center min-w-full min-h-[75vh] bg-header-image bg-cover">
        <h2 className="text-5xl">Congrats! Pizza is on its way!</h2>
      </div>
      <div className="mx-auto my-12">
        <h3 className="text-center text-xl my-3">Enjoy this Dog with Pizza</h3>
        <img className="bg-pizza-gif" alt="" src={PizzaGif} />
      </div>
    </div>
  );
};

export default Confirmation;
