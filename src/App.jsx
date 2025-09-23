import React from "react";
import Cart from "./components/Cart";
import "./App.css";
import { cartData } from "./data/cartData";

const App = () => {
  return (
    <div className="app">
      <h1>Food Truck Favourite</h1>
      <div className="cart-items">
        {cartData.map((cart) => (
          <Cart
            key={cart.id}
            src={cart.src}
            title={cart.title}
            subtitle={cart.subtitle}
            link={cart.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
