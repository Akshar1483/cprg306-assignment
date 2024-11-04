const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li
        className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 cursor-pointer mb-2 w-96"
        onClick={onSelect}
      >
        <span className="font-bold text-xl">{name}</span>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </li>
    );
  };
  
  export default Item;