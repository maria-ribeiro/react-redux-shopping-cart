import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../store/cartSlice";
import "./Order.css";

const Order = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (accumulator, item) => accumulator + item.totalPrice,
    0
  );
  const handleClick = () => {
    dispatch(resetData());
  };

  return (
    <div className="order">
      <h3>Total: {total}€</h3>
      <button className="button" onClick={handleClick}>
        Order
      </button>
    </div>
  );
};

export default Order;
