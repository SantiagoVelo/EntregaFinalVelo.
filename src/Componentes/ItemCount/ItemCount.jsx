import { useState } from "react";

const ItemCount = ({ onAddToCart }) => {
  const [count, setCount] = useState(0);
  const stock = 5;

  const onAdd = () => {
    if (count === stock) return;
    setCount(count + 1);
  };

  const onSubtract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <div className="item-count-container">
        <button onClick={onSubtract} className="count-button">
          -
        </button>
        <span>{count}</span>
        <button onClick={onAdd} className="count-button">
          +
        </button>
      </div>
      <button onClick={() => onAddToCart(count)} className="add-to-cart-button">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
