"use client";

import { useEffect, useState } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals || []);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      {meals.length > 0 ? (
        <p className="text-white text-xl mb-1">
          {" "}
          Here are some meal ideas for {ingredient}
        </p>
      ) : null}
      <ul className="space-y-2">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <li
              key={meal.idMeal}
              className=" bg-gray-800 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-500"
            >
              <h3 className=" text-white capitalize">{meal.strMeal}</h3>
            </li>
          ))
        ) : (
          <p className="text-white text-xl">
            No meal ideas found for {ingredient}
          </p>
        )}
      </ul>
    </div>
  );
};

export default MealIdeas;   