import Product from "./Product";
import "./Products.css";

const Products = () => {
  const products = [
    {
      name: "Harry Potter and the Sorceror's Stone",
      price: "8€",
    },
    {
      name: "Harry Potter and the Sorceror's Stone",
      price: "8€",
    },
    {
      name: "Harry Potter and the Sorceror's Stone",
      price: "8€",
    },
    {
      name: "Harry Potter and the Sorceror's Stone",
      price: "8€",
    },
    {
      name: "Harry Potter and the Sorceror's Stone",
      price: "8€",
    },
  ];
  return (
    <div className="products">
      <ul className="products-ul">
        {products.map((product) => (
          <li className="products-li">
            <Product name={product.name} price={product.price} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
