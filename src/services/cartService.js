import { updateData } from "../store/cartSlice";

export const fetchCartItems = () => {
  return async (dispatch) => {
    const requestHandler = async () => {
      const res = await fetch(
        "https://shopping-cart-app-73e25-default-rtdb.firebaseio.com/cardItems.json"
      );
      const data = await res.json();
      return data;
    };

    try {
      const cartItems = await requestHandler();
      console.log("cartService:fetchCartItems: Request successful", cartItems);
      dispatch(updateData(cartItems));
    } catch (error) {
      console.error(
        "cartService:fetchCartItems: Error sending request",
        error.message
      );
    }
  };
};

export const setCartItems = (cartItems) => {
  const requestHandler = async () => {
    const res = await fetch(
      "https://shopping-cart-app-73e25-default-rtdb.firebaseio.com/cardItems.json",
      { method: "PUT", body: JSON.stringify(cartItems) }
    );
    const data = await res.json();
    console.log("cartService:setCartItems: Request successful", data);
  };

  requestHandler().catch((error) =>
    console.error(
      "cartService:setCartItems: Error sending request",
      error.message
    )
  );
};
