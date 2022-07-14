import React from "react";
import { Link} from "react-router-dom";

const Item = ({product}) => {
    const {img, name, marca, id} = product
    return (
        <div style={{
            border: '2px solid black',
            margin: '10px',
            padding: '10px',
        }} className="card">
            <img src={img} width="400" height="400" alt="name"/>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p className="card-text">{marca}</p>
            </div>
            <Link to={`/detail/${id}`} >Ver detalle</Link>
        </div>
    )
}

export default Item