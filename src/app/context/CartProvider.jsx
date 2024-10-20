'use client'
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productIn = cart.find(item => item.title === product.title);
        if (productIn) {
            setCart(cart.map(item => 
                item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <CartContext.Provider value={[cart, addToCart]}>
            {children}
        </CartContext.Provider>
    );
};
