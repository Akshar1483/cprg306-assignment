
export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-gray-800 text-white">
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-violet-400">Buy {quantity} in {category}</p>
      </div>
    </li>
  );
}