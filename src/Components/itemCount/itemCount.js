import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        stock !== count && setCount(count + 1);
    };

    const substract = () => {
        initial !== count && setCount(count - 1);
    };
    return (
        <div>
        <div className="containerCount">
             <div className="counter">
                <div>
                    <label >Stock disponible : {stock}</label>
                </div>   
                <div>
                    <button className="buttonCounter" onClick={substract}>-</button>
                    <input  className="inputCounter" disabled value={count}/> 
                    <button className="buttonCounter" onClick={add}>+</button> 
                </div>   
            </div>  
            <div>  
                <button className="buttonCarrito" type="button" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    </div>
    );
};
export default ItemCount