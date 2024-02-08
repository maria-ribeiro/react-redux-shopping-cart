import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../store/cartSlice";
import "./CartButton.css";

const CartButton = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleShowCart());
  };

  return (
    <button className="button cart-button" onClick={handleClick}>
      Cart
      <div className="cart-button-quantity">
        <h5>{quantity}</h5>
      </div>
    </button>
  );
};

export default CartButton;
