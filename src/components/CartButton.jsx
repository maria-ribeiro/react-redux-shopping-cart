import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../store/cartSlice";

const CartButton = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleShowCart());
  };

  return (
    <button onClick={handleClick}>
      <h3>Cart: {quantity} items</h3>
    </button>
  );
};

export default CartButton;
