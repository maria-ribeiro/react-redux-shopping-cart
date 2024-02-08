import Product from "./Product";
import "./Products.css";

const Products = () => {
  const PRODUCTS = [
    {
      id: 1,
      name: "Harry Potter and the Sorcerer's Stone",
      price: 6,
    },
    {
      id: 2,
      name: "Harry Potter and the Chamber of Secrets",
      price: 6,
    },
    {
      id: 3,
      name: "Harry Potter and the Prisioner of Azkaban",
      price: 6,
    },
    {
      id: 4,
      name: "Harry Potter and the Goblet of Fire",
      price: 8,
    },
    {
      id: 5,
      name: "Harry Potter and the Order of the Phoenix",
      price: 8,
    },
    {
      id: 6,
      name: "Harry Potter and the Half-Blood Prince",
      price: 8,
    },
    {
      id: 7,
      name: "Harry Potter and the Deathly Hallows",
      price: 10,
    },
  ];
  return (
    <div className="products">
      <ul className="products-ul">
        {PRODUCTS.map((product) => (
          <li key={product.id} className="products-li">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
