export default function Item({ name, quantity, category }) {
    return (
      <li className="p-5 bg-pink-900 text-white ">
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-blue-400">Buy {quantity} in {category}</p>
        </div>
      </li>
    );
  }
