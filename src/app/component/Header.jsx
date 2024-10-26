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
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="29.917808219178085" viewBox="0 0 2336 1664"><path fill="#e11d48" d="M1524 1497q0 68-48 116t-116 48t-116.5-48t-48.5-116t48.5-116.5T1360 1332t116 48.5t48 116.5m-749 0q0 68-48.5 116T610 1661t-116-48t-48-116t48-116.5t116-48.5t116.5 48.5T775 1497M0 3q57 60 110.5 104.5t121 82t136 63t166 45.5t200 31.5t250 18.5t304 9.5T1660 360q139 0 244.5 5t181 16.5t124 27.5t71 39.5t24 51.5t-19.5 64t-56.5 76.5t-89.5 91T2023 836t-139 119q-185 157-286 247q29-51 76.5-109t94-105.5T1863 889t83-91.5t54-80.5t13-70t-45.5-55.5t-116.5-41t-204-23.5t-304-5q-168 2-314-6t-256-23t-204.5-41T409 400.5T286.5 338T195 271.5T127 200t-50.5-69.5t-40-68T0 3"/></svg> MARKIT
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
