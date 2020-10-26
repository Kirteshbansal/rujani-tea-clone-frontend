import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartProducts: [] },
  reducers: {
    addProductToCart(state, action) {
      if (state.cartProducts.length > 0) {
        const check = state.cartProducts.some(
          (p) => p.id === action.payload.id
        );
        if (check) {
          state.cartProducts.map((p, i) => {
            if (p.id === action.payload.id) {
              state.cartProducts[i] = {
                ...state.cartProducts[i],
                selectedQuantity:
                  state.cartProducts[i].selectedQuantity +
                  action.payload.selectedQuantity,
              };
            }
            return p;
          });
        } else {
          state.cartProducts.push(action.payload);
        }
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    changeItemQuantity(state, action) {
      state.cartProducts.map((p, i) => {
        if (p.id === action.payload.id) {
          state.cartProducts[i] = {
            ...state.cartProducts[i],
            selectedQuantity: action.payload.selectedQuantity,
          };
        }
        return p;
      });
    },
    removeProduct(state, action) {
      console.log(action.payload);
      state.cartProducts = state.cartProducts.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const {
  addProductToCart,
  changeItemQuantity,
  removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
