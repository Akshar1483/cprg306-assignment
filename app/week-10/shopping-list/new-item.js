"use client";

import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  //state variables for name, category, and quantity
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  //function to increment quantity
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  //function to decrement quantity
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //form submission handle function
  const handleSubmit = (event) => {
    event.preventDefault();

    //create new item object
    const newItem = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      name,
      category,
      quantity,
    };

    onAddItem(newItem);

    //reset form fields
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  return (
    <div className="flex flex-col mb-6 mt-6">
      <form
        onSubmit={handleSubmit}
        className=" bg-gray-700 p-2 rounded-lg text-black max-w-sm w-full"
      >
        {/* First level input */}
        <div>
          <div className="mb-2">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Item name"
              className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
              required
            />
          </div>

          {/* Middle Level */}
          <div className="flex justify-between">
            <div className="p-2 mt-1 mb-1 rounded-md bg-white text-black w-36">
              <div className="flex justify-between">
                <span className="text-xl font-medium ">{quantity}</span>
                <div className="flex">
                  <button
                    type="button"
                    className={
                      "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
                    }
                    onClick={decrement}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className={
                      "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
                    }
                    onClick={increment}
                    disabled={quantity === 20}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Category dropdown */}

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            >
              <option disabled value="category">
                Category
              </option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;