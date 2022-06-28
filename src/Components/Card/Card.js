import React, { useState } from "react";
import spiderman from "../../assets/img/spiderman.jpg";

const Card = ({stock}) => {

    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value
        if(result<=stock){
        setAmount(amount+value)
    }}

    return (
        <div>
            <h3>
                Spiderman SideShow
            </h3>
            <img src={spiderman} width="400" height="400"></img>
            <h4>Precio: <span className="price">500</span></h4>
            <div>
                <button onClick={()=>count(-1)}>-</button>
                <span>{amount} | {stock}</span>
                <button onClick={()=>count(+1)}>+</button>
            </div>
            <div>
            <button>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default Card