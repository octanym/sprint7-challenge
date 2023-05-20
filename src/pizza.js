import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import Pizzajpg from "./Assets/Pizza.jpg";

const Pizza = () => {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const [errors, setErrors] = useState({ name: "", size: "" });

  const [data, setData] = useState({
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special: "",
  });

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("you didn't enter a name")
      .min(2, "name must be at least 2 characters"),
    size: yup
      .string()
      .oneOf(["Small", "Medium", "Large"], "you didn't select a size"),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    special: yup.string(),
  });

  const setDataErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const handleInputs = (e) => {
    const valueToUse =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDataErrors(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: valueToUse });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, size, topping1, topping2, topping3, topping4, special } =
      data;

    const order = {
      name: name.trim(),
      size: size,
      topping1: topping1,
      topping2: topping2,
      topping3: topping3,
      topping4: topping4,
      special: special.trim(),
    };

    axios
      .post("https://reqres.in/api/users", order)
      .then((res) => {
        const { name, size, topping1, topping2, special } = res.data;
        setData({
          name: name,
          size: size,
          topping1: topping1,
          topping2: topping2,
          special: special,
        });
      })
      .catch((err) => {
        alert("there was an issue placing your order", err.errors);
      });

    navigate("/confirmation");
    return data;
  };

  useEffect(() => {
    schema.isValid(data).then((valid) => setDisabled(!valid));
  }, [data, schema]);

  return (
    <div className="mx-auto my-5 max-w-lg border border-black">
      <div>
        <h3 className="py-4 text-center">Build Your Own Pizza</h3>
        <img alt="" src={Pizzajpg} />
      </div>
      <div>
        <h3 className="px-5 py-5">Select Your Customizations</h3>
        <form id="pizza-form" onSubmit={handleSubmit}>
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
              <option value="">select</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <div className="text-red-500 min-w-full">{errors.size}</div>
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
                name="topping1"
                value="Pepperoni"
                type="checkbox"
                checked={data.topping1}
                onChange={handleInputs}
              />
              <label>Pepperoni</label>
            </div>

            <div className="w-42">
              <input
                className="mr-2"
                name="topping2"
                value="Diced Tomatoes"
                type="checkbox"
                checked={data.topping2}
                onChange={handleInputs}
              />
              <label>Diced Tomatoes</label>
            </div>
            <div className="w-42">
              <input
                className="mr-2"
                name="topping3"
                value="Sausage"
                type="checkbox"
                checked={data.topping3}
                onChange={handleInputs}
              />
              <label>Sausage</label>
            </div>
            <div className="w-42">
              <input
                className="mr-2"
                name="topping4"
                value="Black Olives"
                type="checkbox"
                checked={data.topping4}
                onChange={handleInputs}
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
            <div className="text-red-500 min-w-full">{errors.name}</div>
            <input
              className="w-20 mr-4 text-center border border-black"
              type="number"
            />
            <button
              className="flex justify-between w-72 px-3 py-1 border border-black"
              id="order-button"
              disabled={disabled}
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
