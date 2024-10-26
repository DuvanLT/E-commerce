'use client'
import React, { createContext, useState,useEffect } from "react";

export const CartContext = createContext();

const saveCartToLocalStorage = (cart) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
};

const getCartFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const cart = localStorage.getItem('cart')
        return cart ? JSON.parse(cart) : []
    }
    return []
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getCartFromLocalStorage());

    useEffect(() => {
        saveCartToLocalStorage(cart)
    }, [cart]);

    const addToCart = (product) => {
        const productIn = cart.find(item => item.id === product.id)
        if (productIn) {
            console.log(productIn)
            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const incrementCart = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }

    const lessCart = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity != 0))
    }

    
    return (
        <CartContext.Provider value={{cart, addToCart,incrementCart,lessCart}}>
            {children}
        </CartContext.Provider>
    );
};
