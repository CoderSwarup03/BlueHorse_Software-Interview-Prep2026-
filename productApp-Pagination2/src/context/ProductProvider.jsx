import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductProvider = ({ children }) => {
    // const [cart, setCart] = useState([]);

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    // addTCart
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            setCart(cart.map((item) => item.id === product.id ? ({ ...item, quantity: item.quantity + 1 }) : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        toast.success('Item added to cart');
    }

    // deletCart
    const deleteCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        toast.success('Item removed from cart');
    }

    const increment = (id) => {
        setCart(cart.map((item) => item.id === id ? ({ ...item, quantity: item.quantity + 1 }) : item));
    }

    const decrement = (id) => {
        setCart(cart.map((item) => item.id === id ? ({ ...item, quantity: item.quantity - 1 }) : item));
    }

    // clear cart
    const clearCart = () => {
        setCart([]);
    }

    return (
        <>
            <productContext.Provider value={{ cart, addToCart, deleteCart, increment, decrement, clearCart }}>
                {children}
            </productContext.Provider>
        </>
    )
}

export default ProductProvider