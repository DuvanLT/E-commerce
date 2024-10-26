'use client'
import useFetch from './api/Api';
import Card from './component/Card'
import { useRouter } from "next/navigation"
import Category from './component/Category';
export default function Home() {
    const { data } = useFetch('https://fakestoreapi.com/products?limit=12');
    const router = useRouter()
    return (
      <>
      <Category />
        <h1>PRODUCTS</h1>
        <div className='container'>
            {data.map(item => (
            <div  key={item.id} onClick={() => { router.push(`/product/${item.id}`)}}>
             <Card title={item.title} image={item.image} price={item.price} category={item.category} description={item.description} id={item.id} />
             </div>
            ))}
        </div>
     </>
  );
}
