import React, { useState } from "react";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { img, name, marca, description, price, stock } = product;

  const [acomprar, setAcomprar] = useState(0);

  const onAdd = ( amount ) => {
    setAcomprar ( amount );
  };

  return (
    <div className="card">
      <img src={img} width="400" height="400" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{marca}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">$ {price}</p>
        <div>
          {acomprar === 0 && <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
          {setAcomprar !== 0 && <Link to={'/cart'}>Terminar Compra</Link>}           
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
