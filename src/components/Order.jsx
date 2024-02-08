import { useSelector } from "react-redux";
import "./Order.css";

const Order = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (accumulator, item) => accumulator + item.totalPrice,
    0
  );

  return (
    <div className="order">
      <h3>Total: {total}€</h3>
      <button className="button">Order</button>
    </div>
  );
};

export default Order;
