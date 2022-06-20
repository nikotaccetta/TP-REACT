import React from "react";
import "./NavBar.css";
import logo from "../../assets/img/logo.jpg";
import CartWidget from "../CartWidget/CartWidget"

const MenuItems = [
    {
        id:1,
        label:"Marvel",
    },
    {
        id:2,
        label:"DC",
    },
    {
        id:3,
        label:"Star Wars"
    },
]

const Header = () => {
    return (
        <div className="nav">
            <img src={logo} className="nav-logo" alt="Logo"></img>
            <nav className="nav-items">
                {MenuItems.map((item)=> (
                    <a href="/" className="nav-item" key={item.id}>
                        {item.label}
                    </a>
                ))}                           
            </nav>
            <div>
                <CartWidget />            
            </div>                        
        </div>    
    )
}

export default Header