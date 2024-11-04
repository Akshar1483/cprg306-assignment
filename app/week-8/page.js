"use client";
import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 bg-gray-900 ">
      <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="ml-4 mt-6">
          <h1 className="text-3xl font-bold text-white">Meal Ideas</h1>
          {/* Conditional Rendering: If an item is selected, show meal ideas */}
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <h2 className="text-xl text-white">
              Select an item to see meal ideas
            </h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;