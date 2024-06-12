import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Vote from "./components/userevents/vote";
import Products from "./components/stateMagement/shop/products";
import ContextProvider from "./context/contextProvider";

function App() {
  const [globalVoteCount] = useState(10);
  return (
    <div className="App">
      <Vote globalVoteCount={globalVoteCount} />
      <ContextProvider>
        <Products />
      </ContextProvider>
    </div>
  );
}

export default App;
