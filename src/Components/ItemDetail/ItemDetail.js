import React, { useState, useContext } from "react";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ product }) => {
  const { img, name, marca, description, price, stock } = product;

  const [acomprar, setAcomprar] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = ( amount ) => {
    setAcomprar ( amount ); 
    addToCart(product, amount);   
  };

  return (
    <div style={{display: "flex",    
    alignItems: "center",
      border: '2px solid black',
      margin: '10px',
      padding: '10px',
  }} className="card">
      <img src={img} width="400" height="400" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{marca}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">$ {price}</p>
        <div>
          {acomprar === 0 ? (
                    <ItemCount
                        stock={stock}
                        initial={1}
                        onAdd={onAdd}
                    />
                ) : (
                    <Link to="/cart">Finalizar Compra</Link>
                )}         
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
