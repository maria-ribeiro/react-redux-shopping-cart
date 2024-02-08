import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const { id, name, quantity, price, totalPrice } = item;
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(addToCart({ id, name, price }));
  };
  const decreaseQuantity = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <ul>
      <li>Item: {name}</li>
      <li>
        <button onClick={decreaseQuantity}>-</button>
        Quantity: {quantity}
        <button onClick={increaseQuantity}>+</button>
      </li>
      <li>Price: {totalPrice}€</li>
    </ul>
  );
};

export default CartItem;
