import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const Cart = () => {
    const { cart, deleteItem, calcularTotal } = useContext(CartContext);
    

    if (cart.length === 0) {
        return <h2>El carrito esta vacio</h2>;
    }

    return (
        <div>
            <div>
                {cart.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '2px solid black',
                            margin: '10px',
                            padding: '10px',
                        }}
                    >
                        <div>
                            <img src={product.img} width="70px" alt="product" />
                        </div>
                        <h2>Producto: {product.name}</h2>
                        <h2>$ {product.price}</h2>
                        <h2>Cantidad: {product.cantidad}</h2>
                        <button onClick={() => deleteItem(product.id)}>
                            eliminar
                        </button>
                    </div>
                ))}
                <h3>Total: $ {calcularTotal()} </h3>
            </div>
        </div>
    );
};

export default Cart;