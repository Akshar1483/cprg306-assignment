"use client";

import React, { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { addItem, getItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = async (item) => {
    try {
      const id = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { ...item, id }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Select an item
  const handleItemSelect = (item) => {
    try {
      if (!item || !item.name) throw new Error("Invalid item data");
      setSelectedItemName(item.name);
    } catch (error) {
      console.error("Error selecting item:", error.message);
    }
  };
  const loadItems = async () => {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return (
    <main className="p-8 min-h-screen bg-gray-900 text-white">
      {user === null ? (
        <p className="text-center text-lg">
          You need to sign in to view this page.
        </p>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Meal Ideas</h2>
              {selectedItemName ? (
                <MealIdeas ingredient={selectedItemName} />
              ) : (
                <p className="text-gray-400">
                  Select an item to see meal ideas.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}