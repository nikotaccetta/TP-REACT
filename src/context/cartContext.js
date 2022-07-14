import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item.id, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const sumarCantidad = (id, cantidad) => {
        const newCart = cart.map((product) =>
        product.id === id
                ? { ...product, cantidad: product.cantidad + cantidad }
                : product
        );

        setCart(newCart);
    };

    const deleteItem = (id) => {
        const itemsFiltrados = cart.filter((product) => product.id !== id);
        setCart(itemsFiltrados);
    };

    const calcularTotal = () => {
        return cart.reduce(
            (acum, actual) => acum + actual.price * actual.cantidad,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteItem, calcularTotal }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;