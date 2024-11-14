import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const result = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`)
    const data = await response.json()
    return data.meals || []
}

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([])

    async function loadMealIdeas() {
        setMeals(await fetchMealIdeas(ingredient))
    }

    useEffect(() => {
        loadMealIdeas()
    }, [ingredient])

    return <div>
        {
            meals.length === 0 ? <p>No meal ideas found for {ingredient}</p>
                :
                (
                    <>
                        <header><h2 className='font-bold text-2xl'>Here are some ideas using {ingredient}</h2></header>
                        <ul>
                            {meals.map(meal => (
                                <li key={meal.strMeal}>{meal.strMeal}</li>
                            ))}
                        </ul>
                    </>
                )
        }


    </div>
}