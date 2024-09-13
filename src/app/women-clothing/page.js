'use client'
import useFetch from '../api/Api';
import { useRouter } from "next/navigation"
import Card from "../component/Card"

export default function jewellery() {
    const router = useRouter()
    const {data} = useFetch(`https://fakestoreapi.com/products/category/women's clothing`)

    return(
        <>
        <span className='startpoint' onClick={() => {router.push("/")}}>Home / </span><span className='endpoint'>Women</span>
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