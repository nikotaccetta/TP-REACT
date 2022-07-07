import React from "react";
import "./NavBar.css";
import logo from "../../assets/img/logo.jpg";
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

const MenuItems = [
    {
        id:1,
        label:"Home",
        route:"/"
    },
    {
        id:2,
        label:"Marvel",
        route:"/category/Marvel"
    },
    {
        id:3,
        label:"DC",
        route:"/category/DC"
    },
    {
        id:4,
        label:"Star Wars",
        route:"/category/StarWars"
    },
]

const Header = () => {
    return (
        <div className="nav">
            <Link to="/"><img src={logo} className="nav-logo" alt="Logo"></img></Link>            
            <nav className="nav-items">
                {MenuItems.map((item)=> (
                    <Link className="nav-item" to={item.route} key={item.id}>
                        {item.label}
                    </Link>
                ))}                           
            </nav>
            <div>
                <CartWidget/>            
            </div>                        
        </div>    
    )
}

export default Header