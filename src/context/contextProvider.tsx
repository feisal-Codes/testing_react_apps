import { useReducer, useContext } from "react";
import { AppContext, initialState } from "./store";
import * as React from "react";
import { Context } from "vm";
import { productReducer } from "./reducers";

export interface Product {
    name:string,
    id:number,
    category:string
    price:number
    
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(
    productReducer,
    initialState
  );



  //return context provider
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

//export a context consumer

export const useAppContext = () => useContext(AppContext);
export default ContextProvider;