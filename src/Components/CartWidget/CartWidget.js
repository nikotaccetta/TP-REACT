import React from "react";
import shopping_cart from "../../assets/img/shopping_cart.png";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <button className="cart_button">
            <img src={shopping_cart} className="cart_icon" alt="Cart Icon"></img>
        </button>
    );
};

export default CartWidget;
