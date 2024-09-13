'use client'
import useFetch from '../api/Api';
import { useRouter } from "next/navigation"
import Card from "../component/Card"

export default function jewellery() {
    const router = useRouter()
    const {data} = useFetch('https://fakestoreapi.com/products/category/jewelery')

    return(
        <>
        <span className='startpoint' onClick={() => {router.push("/")}}>Home / </span><span className='endpoint'>Jewelery</span>
        <div className='container'>
        {data.map(item => (
      
            <Card key={item.id} title={item.title} image={item.image} price={item.price}  />
      
        ))}
          </div>
        </>
    )
}