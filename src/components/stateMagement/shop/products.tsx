import * as React from "react";
import { Product, useAppContext } from "../../../context/contextProvider";

interface IProductProps {}

const Products = () => {
  const { state, dispatch } = useAppContext();
  const { products } = state;
  console.log(state);

  const handleRemove = (product: Product) => {
    console.log("clicked");
    dispatch({ type: "delete", payload: product });
  };
  return (
    <>
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <button
              onClick={() =>
                dispatch({ type: "add to cart", payload: product })
              }
            >
              Add to Cart
            </button>
            <button onClick={() => handleRemove(product)}>
              Delete Product
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
