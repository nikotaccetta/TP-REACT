import React from "react";


const ItemDetail = ({product}) => {
    const {img, name, marca, description, price} = product
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="name"/>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p className="card-text">{marca}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
            </div>           
        </div>
    )
}

export default ItemDetail