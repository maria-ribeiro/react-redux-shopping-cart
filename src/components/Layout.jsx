import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import "./Layout.css";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.show);

  return (
    <div>
      <Header />
      <div className="layout-main">
        <Products />
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Layout;
