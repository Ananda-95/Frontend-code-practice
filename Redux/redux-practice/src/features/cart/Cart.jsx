import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../cart/cartSlice";

const products = [
  { id: 1, name: "Keyboard", price: 1000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Monitor", price: 8000 },
];

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          {product.name} — ₹{product.price}

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} — ₹{item.price} × {item.quantity}

          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}