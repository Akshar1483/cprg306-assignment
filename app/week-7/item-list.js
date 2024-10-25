"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState('name');

    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <div>
            <div className="mb-4">
                <button
                    className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSortBy('name')}
                >
                    Name
                </button>
                <button
                    className={`p-2 ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSortBy('category')}
                >
                    Category
                </button>
            </div>
            <ul className="space-y-2">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;