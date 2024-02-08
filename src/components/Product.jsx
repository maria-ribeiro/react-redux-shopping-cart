import "./Product.css";
import image from "../assets/hp.webp";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Product = ({ product }) => {
  const { name, price } = product;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="book-cover" />
      <h5>{name}</h5>
      <h3 className="product-price">{price}€</h3>
      <button className="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Product;
