import React from "react";
import Pizzajpg from "./Assets/Pizza.jpg";

const Pizza = () => {
  return (
    <div className="mx-auto my-5 max-w-lg border border-black">
      <div>
        <h3 className="py-4 text-center">Build Your Own Pizza</h3>
        <img alt="" src={Pizzajpg} />
      </div>
      <div>
        <h3 className="px-5 py-5">Select Your Customizations</h3>
        <form className="">
          <div className="flex flex-col px-5 py-3 bg-gray-200">
            <label>Choice of Size</label>
            <small>Required</small>
          </div>

          <div className="px-5 py-3">
            <select className="px-2 py-2 w-48 bg-white border border-black">
              <option default>select</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div className="flex flex-col px-5 py-3 bg-gray-200">
            <label>Choice of Sauce</label>
            <small>Required</small>
          </div>
          <div className="flex flex-col w-48 px-5 py-2">
            <div>
              <input className="my-1" type="radio" />
              <label className="mx-3">Original Red</label>
            </div>
            <div>
              <input className="my-1" type="radio" />
              <label className="mx-3">Garlic Ranch</label>
            </div>
            <div>
              <input className="my-1" type="radio" />
              <label className="mx-3">BBQ Sauce</label>
            </div>
            <div>
              <input className="my-1" type="radio" />
              <label className="mx-3">Spinach Alfredo</label>
            </div>
          </div>

          <div className="flex flex-col px-5 py-3 bg-gray-200">
            <label>Add Toppings</label>
            <small>Choose up to 10</small>
          </div>

          <div className="flex flex-col flex-wrap max-h-52 px-5 py-3">
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Pepperoni</label>
            </div>

            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Diced Tomatoes</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Sausage</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Black Olives</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Canadian Bacon</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Roasted Garlic</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Spicy Italian Sausage</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Artichoke Hearts</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Grilled Chicken</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Three Cheese</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Onions</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Pineapple</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Green Pepper</label>
            </div>
            <div className="w-42">
              <input className="mr-2" type="checkbox" />
              <label>Extra Cheese</label>
            </div>
          </div>

          <div className="flex flex-col px-5 py-3 bg-gray-200">
            <label>Choice of Substitute</label>
            <small>Choose up to 1</small>
          </div>
          <div className="px-5 py-3">
            <input className="mr-2" type="checkbox" />
            <label>Gluten Free Crust (+ $100)</label>
          </div>

          <div className="px-5 py-3 bg-gray-200">
            <label>Special Instructions</label>
          </div>
          <div className="px-5 py-3">
            <input
              className="w-96 px-3 py-3 border border-black"
              type="text"
              placeholder="Anything else you'd like to add?"
            />
          </div>

          <div className="flex px-5 py-3 border-t border-black">
            <input
              className="w-20 mr-5 text-center border border-black"
              type="number"
            />
            <button className="flex justify-between w-72 px-3 py-1 border border-black">
              <p>Add to Order</p>
              <p>$17.99</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pizza;
