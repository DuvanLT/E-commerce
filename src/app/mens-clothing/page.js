'use client'
import useFetch from '../api/Api';
import { useRouter } from "next/navigation"
import Card from "../component/Card"
import { CartContext } from "../context/CartProvider";
import { useContext } from 'react';
export default function mens() {
    const {cart} = useContext(CartContext)
    const router = useRouter()
    const {data} = useFetch(`https://fakestoreapi.com/products/category/men's clothing`)

    return(
        <>
        <span className='startpoint' onClick={() => {router.push("/")}}>Home / </span><span className='endpoint'>Men</span>
        <div className='container'>
            {data.map(item => (
            <div  key={item.id} onClick={() => { router.push(`/product/${item.id}`)}}>
             <Card title={item.title} image={item.image} price={item.price}/>
             </div>
            ))}
        </div>
        </>
    )
}