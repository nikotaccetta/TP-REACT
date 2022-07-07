import React from "react";
import ItemCount from "../itemCount/itemCount";


const ItemDetail = ({product}) => {
    const {img, name, marca, description, price, stock} = product
    return (
        <div className="card">
            <img src={img} width="400" height="400"  alt={name}/>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p className="card-text">{marca}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
                <ItemCount stock={stock} initial={1} /> 
            </div>           
        </div>
    )
}

export default ItemDetail