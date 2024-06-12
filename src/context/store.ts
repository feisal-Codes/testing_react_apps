import { createContext } from "react";
import { Product } from "./contextProvider";
interface State {
  products: Product[];
  cart: [];
}

interface AppContextType {
  state: State;
  dispatch: any;
}

export const initialState: State = {
  products: [
    { name: "shirt", id: 1, category: "clothes", price: 200 },
    { name: "pen", id: 2, category: "office", price: 300 },
    { name: "pencil", id: 3, category: "office", price: 3000 },
  ],

  cart: [],
};

//create a context
export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
});
