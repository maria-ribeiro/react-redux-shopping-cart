import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { fetchCartItems, setCartItems } from "./services/cartService";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    if (cartItems.changed) {
      setCartItems(cartItems);
    }
  }, [cartItems]);

  return <div className="App">{isLoggedIn ? <Layout /> : <Auth />}</div>;
}

export default App;
