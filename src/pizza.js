import { useState } from "react";
import Pizzajpg from "./Assets/Pizza.jpg";

const Pizza = () => {
  const [data, setData] = useState({
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    special: "",
  });

  const [toppings, setToppings] = useState([]);

  const handleToppings = (e) => {
    const replaced = toppings.length > 1 ? toppings.pop() : "none";
    setToppings([replaced, e.target.value]);
  };

  const handleInputs = (e) => {
    console.log(data, toppings);
    // explicitly returning the hook values below enables the correct behavior but makes the form inputs unreceptive
    if (toppings.includes("none") || toppings[0] === toppings[1]) {
      return setData({ ...data, topping1: true, topping2: false });
    } else if (toppings[0] !== toppings[1]) {
      return setData({ ...data, topping1: true, topping2: true });
    }

    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto my-5 max-w-lg border border-black">
      <div>
        <h3 className="py-4 text-center">Build Your Own Pizza</h3>
        <img alt="" src={Pizzajpg} />
      </div>
      <div>
        <h3 className="px-5 py-5">Select Your Customizations</h3>
        <form id="pizza-form">
          <div className="flex flex-col px-5 py-3 bg-gray-200">
            <label>Choice of Size</label>
            <small>Required</small>
          </div>

          <div className="px-5 py-3">
            <select
              className="px-2 py-2 w-48 bg-white border border-black"
              name="size"
              value={data.size}
              id="size-dropdown"
              onChange={handleInputs}
            >
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
              <input
                className="mr-2"
                name="topping"
                value="Pepperoni"
                type="checkbox"
                checked={toppings.includes("Pepperoni")}
                onChange={handleToppings}
              />
              <label>Pepperoni</label>
            </div>

            <div className="w-42">
              <input
                className="mr-2"
                name="topping"
                value="Diced Tomatoes"
                type="checkbox"
                checked={toppings.includes("Diced Tomatoes")}
                onChange={handleToppings}
              />
              <label>Diced Tomatoes</label>
            </div>
            <div className="w-42">
              <input
                className="mr-2"
                name="topping"
                value="Sausage"
                type="checkbox"
                checked={toppings.includes("Sausage")}
                onChange={handleToppings}
              />
              <label>Sausage</label>
            </div>
            <div className="w-42">
              <input
                className="mr-2"
                name="topping"
                value="Black Olives"
                type="checkbox"
                checked={toppings.includes("Black Olives")}
                onChange={handleToppings}
              />
              <label>Black Olives</label>
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
              name="special"
              value={data.special}
              id="special-text"
              type="text"
              placeholder="Anything else you'd like to add?"
              onChange={handleInputs}
            />
          </div>

          <div className="flex flex-wrap px-5 py-3 border-t border-black">
            <input
              className="w-96 px-3 py-1 mr-36 mb-2 border border-black"
              name="name"
              value={data.name}
              id="name-input"
              type="text"
              placeholder="What's your name?"
              onChange={handleInputs}
            />
            <input
              className="w-20 mr-4 text-center border border-black"
              type="number"
            />
            <button
              className="flex justify-between w-72 px-3 py-1 border border-black"
              id="order-button"
            >
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
