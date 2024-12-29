'use client';
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import useFetch from "../api/Api";
import Card from "./Card";
import { CartContext } from "../context/CartProvider";

export default function Header() {
    const {cart} = useContext(CartContext)
    const quantity = (cart && cart.length > 0) ? cart.reduce((acc, curr) => acc + curr.quantity, 0) : 0
    const router = useRouter();
    const [query, setQuery] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { data } = useFetch(`https://fakestoreapi.com/products`)
    const handleChange = (event) => {
        const searchQuery = event.target.value
        setQuery(searchQuery);
    };

    useEffect(() => {
        if (query && filteredProducts) {
            const searchProducts = () => {
                const searchFilter = data.filter((item) =>
                    item.title.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredProducts(searchFilter);
            };
            searchProducts();
        } else {
            setFilteredProducts([]);
        }
    }, [query], [filteredProducts]);

    return (
        <>
            <header>
                <nav className="top_nav">
                    <div className="logo" onClick={() => { router.push(`/`) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 650 800"><path fill="#59ff9e" d="M648 256q0 2 1 3t0 3v20q0 10-7 17t-17 7h-46v324q0 10-6 16t-17 7H93q-10 0-17-7t-7-16V306H23q-10 0-16-7t-7-17v-20q0-4 1-6L60 39q5-16 17-25t28-9h439q16 0 28 9t16 25zm-138 50H139v127q0 5 4 8t8 4h347q5 0 9-4t3-8z"/></svg>MARKIT
                    </div>
                    <form className="form_desktop" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Search a product" name="search" onChange={handleChange} />
                    </form>
                    <div className="shopycar">
                        <button onClick={() => { router.push(`/cart`) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24">
                                <path fill="#000000" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/>
                            </svg>
                            {quantity}
                        </button>
                    </div>
                </nav>
                <form className="phone_input" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Search a product" name="search" onChange={handleChange} />
                </form>
            </header>

            <div>
                {filteredProducts.length > 0 ? (
                    <div className='container'>
                        {filteredProducts.map((item) => (
                            <div key={item.id} onClick={() => { router.push(`/product/${item.id}`) }}>
                                <Card title={item.title} image={item.image} price={item.price} category={item.category} description={item.description} />
                            </div>
                        ))}
                    </div>
                ) : (<></>)}
            </div>
        </>
    );
}
