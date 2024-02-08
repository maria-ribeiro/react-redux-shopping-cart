import "./Product.css";
import image from "../assets/hp.webp";

const Product = ({ name, price }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="book-cover" />
      <h5>{name}</h5>
      <h3 className="product-price">{price}</h3>
      <button className="button">Add</button>
    </div>
  );
};

export default Product;
