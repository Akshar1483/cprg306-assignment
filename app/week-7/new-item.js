"use client";

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState(""); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substr(2, 9),  
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center justify-start space-y-6 p-8 bg-white rounded-3xl shadow-lg w-full max-w-lg">
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        required
        className="border p-3 w-full rounded-xl bg-gray-100 text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center justify-between space-x-6 w-full">
        <div className="flex items-center space-x-4">
          
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-gray-400 text-white w-10 h-10 flex items-center justify-center rounded-full disabled:opacity-50 transition-all hover:bg-gray-500"
          >
            -
          </button>
          <span className="text-lg font-semibold text-gray-800">{quantity}</span>
          
          <button
            onClick={increment}
            disabled={quantity === 20}
            className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full disabled:opacity-50 transition-all hover:bg-blue-700"
          >
            +
          </button>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 w-full border rounded-xl bg-gray-100 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white w-full py-3 rounded-xl text-lg shadow-lg transition-all hover:bg-blue-700"
      >
        Add Item
      </button>
    </div>
  );
}
