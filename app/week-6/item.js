export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-white text-black">
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-violet-400">Buy {quantity} in {category}</p>
      </div>
    </li>
  );
}