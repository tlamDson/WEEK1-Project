import React from "react";
import "./Cart.css";

const Cart = ({ src, title, subtitle, link }) => {
  return (
    <div>
      <div className="cart">
        <img className="img" src={`${src}`} alt="" />
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
        <button className="view-menu">
          <a target="_blank" href={link}>
            View Menu
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cart;
