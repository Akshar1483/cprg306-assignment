"use client";
import { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = () => {
    if (sortBy === "name") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "category") {
      return [...items].sort((a, b) => a.category.localeCompare(b.category));
    }
    if (sortBy === "groupByCategory") {
      const grouped = items.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});

      return Object.entries(grouped)
        .sort(([catA], [catB]) => catA.localeCompare(catB))
        .flatMap(([category, items]) =>
          items.sort((a, b) => a.name.localeCompare(b.name))
        );
    }
    return items;
  };

  return (
    <div>
      <div className="mb-4 ">
        <div className="flex items-center">
          <h2 className="text-lg text-white">Sort By:</h2>
          <div className="flex">
            <button
              className={`px-4 py-2 mr-2 ml-2 ${
                sortBy === "name" ? "bg-blue-500" : "bg-gray-500"
              } text-white w-24 rounded-lg hover:bg-blue-500`}
              onClick={() => setSortBy("name")}
            >
              Name
            </button>
            <button
              className={`px-4 py-2 mr-2 ${
                sortBy === "category" ? "bg-blue-500" : "bg-gray-500"
              } text-white w-24 rounded-lg hover:bg-blue-500`}
              onClick={() => setSortBy("category")}
            >
              Category
            </button>
            <button
              className={`px-4 py-2 ${
                sortBy === "groupByCategory" ? "bg-blue-500" : "bg-gray-500"
              } text-white w-24 rounded-lg hover:bg-blue-500`}
              onClick={() => setSortBy("groupByCategory")}
            >
              Grouped Category
            </button>
          </div>
        </div>
      </div>

      <ul className="space-y-4">
        {sortBy === "groupByCategory"
          ? Object.entries(
              items.reduce((acc, item) => {
                if (!acc[item.category]) {
                  acc[item.category] = [];
                }
                acc[item.category].push(item);
                return acc;
              }, {})
            )
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([category, items]) => (
                <li key={category}>
                  <h2 className="text-2xl font-bold capitalize text-white">
                    {category}
                  </h2>
                  <ul>
                    {items
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => (
                        <Item
                          key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          category={item.category}
                        />
                      ))}
                  </ul>
                </li>
              ))
          : sortedItems().map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
              />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;