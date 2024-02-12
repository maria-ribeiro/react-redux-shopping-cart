import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import Order from "./Order";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Your cart</h2>
        {cartItems.length > 0 ? (
          <ul className="cart-ul">
            {cartItems.map((item) => (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="cart-empty">
            <h4>Empty</h4>
          </div>
        )}
      </div>
      <Order />
    </div>
  );
};

export default Cart;
