import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import Order from "./Order";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.show);

  return (
    <div>
      <Header />
      <Products />
      {showCart && <Cart />}
      <Order />
    </div>
  );
};

export default Layout;
