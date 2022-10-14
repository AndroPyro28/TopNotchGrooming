import {
  createListenerMiddleware,
  createSlice,
  current,
} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],

  reducers: {
    addToCartReducer: (state, action) => {
      state = JSON.parse(JSON.stringify(current(state)));

      const { product, data } = action.payload;

      if (data.action === "update") {
        return state.map((item) => {
          if (item.product_id == product.id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        product.product_id = product.id;
        product.id = data.id;
        product.quantity = 1; // assigning new property called quantity
        delete product.product_stocks; // removing product stock property
        state.push(product);
        return state;
      }
    },

    updateToCartReducer: (state, action) => {
      state = JSON.parse(JSON.stringify(current(state)));
      const {id, updateAction} = action.payload;
        return state.map((item) => {
          if(item.id == id) {
            updateAction === "incremeant" ? item.quantity += 1 : item.quantity -= 1;
          }
          return item;
        });
    },

    removeTocartReducer: (state, action) => {
      state = JSON.parse(JSON.stringify(current(state)));
      const productId = action.payload;
      return state.filter((product) => product.id != productId);
    },
    setToCartReducer: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addToCartReducer,
  updateToCartReducer,
  removeTocartReducer,
  setToCartReducer,
} = cartSlice.actions;

export default cartSlice.reducer;
