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
          item.quantity = item.product_id == product.id && item.quantity + 1;
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
      
    },
    removeTocartReducer: (state, action) => {
      //   console.log(state);
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
