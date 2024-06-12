import { Product } from "./contextProvider";
export const productReducer = (state: any, action: any) => {
  console.log("we are here");

  switch (action.type) {
    case "add to cart": {
      //handle cart is empty
      //handle product exists in cart
      let updatedCart = [];
      const isProduct = state.cart.find(
        (product: Product) => product.id === action.payload.id
      );

      if (!isProduct) {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      } else {
        updatedCart = state.cart.map((product: any) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return { ...state, cart: updatedCart };
    }
    case "delete": {
      const updatedProducts = state.products.filter(
        (product: any) => product.id !== action.payload.id
      );

      return { ...state, products: updatedProducts };
    }
    default:
      return state;
  }
};
