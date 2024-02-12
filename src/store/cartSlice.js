import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], quantity: 0, show: false, changed: false },
  reducers: {
    updateData: (state, action) => {
      state.items = action.payload.items ? action.payload.items : [];
      state.quantity = action.payload.quantity;
      state.changed = false;
    },
    resetData: (state) => {
      state.items = [];
      state.quantity = 0;
      state.changed = true;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.quantity++;
      state.changed = true;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.quantity--;
      state.changed = true;
    },
    toggleShowCart: (state) => {
      state.show = !state.show;
      state.changed = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleShowCart,
  updateData,
  resetData,
} = cartSlice.actions;

export default cartSlice.reducer;
