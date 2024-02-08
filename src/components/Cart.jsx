import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div>
      <h2>Your cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
