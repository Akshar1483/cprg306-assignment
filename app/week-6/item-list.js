'use client'; 
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name'); 

  
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <button
        className={`margin-right-2 padding-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setSortBy('name')}style={{ padding: '12px 24px', fontSize: '16px', marginRight: '16px'}}>Sort by Name</button>
      <button
        className={`margin-right-2 padding-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setSortBy('category')}style={{ padding: '12px 24px', fontSize: '16px' }}>Sort by Category</button>
      <ul className="space-y-2 margin-top-4">
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
