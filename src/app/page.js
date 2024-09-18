'use client'
import useFetch from './api/Api';
import Card from './component/Card'
import Category from './component/Category';
import { useRouter } from "next/navigation"
export default function Home() {
 
    const { data } = useFetch('https://fakestoreapi.com/products?limit=10');
    const router = useRouter()
    return (
      <> 
        <Category />
        <h1>PRODUCTS</h1>
        <div className='container'>
            {data.map(item => (
            <div  key={item.id} onClick={() => { router.push(`/product/${item.id}`)}}>
             <Card title={item.title} image={item.image} price={item.price}/>
             </div>
            ))}
        </div>
        </>
  );
}
