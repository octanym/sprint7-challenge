import React from "react";
import pizzaphoto from "./Assets/Pizza.jpg";

const Pizza = () => {
  return (
    <div className="flex-col mx-auto">
      <div>
        <h3>Build Your Own Pizza</h3>
        <img className="w-28 h-16" src={pizzaphoto} alt="" />
      </div>
      <div>
        <h3>Build Your Own Pizza</h3>
        <form>
          <label>
            Choice of Size
            <small>Required</small>
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </label>

          <label>
            Choice of Sauce
            <small>Required</small>
            <input />
          </label>

          <label>
            Add Toppings
            <small>Choose up to 10</small>
            <input />
          </label>

          <label>
            Choice of Substitute
            <small>Choose up to 1</small>
            <input />
          </label>

          <label>
            Special Instructions
            <input type="text" placeholder="Anything else you'd like to add?" />
          </label>

          <label>
            <input type="number" />
          </label>

          <button>
            <p>Add To Order</p>
            <p>$17.99</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pizza;
