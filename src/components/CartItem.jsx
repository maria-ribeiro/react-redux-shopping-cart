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
    <ul className="cart-item">
      <li>{name}</li>
      <li>
        <button onClick={decreaseQuantity}>-</button>
        <span className="cart-quantity">{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </li>
      <li>{totalPrice}€</li>
    </ul>
  );
};

export default CartItem;
