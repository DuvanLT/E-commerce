'use client'
import useFetch from './api/Api';
import Card from './component/Card'
export default function Home() {
 
    const { data } = useFetch('https://fakestoreapi.com/products?limit=20');

    return (
        <div className='container'>
            {data.map(item => (
             <Card key={item.id} title={item.title} image={item.image} price={item.price}  />
            ))}
        </div>
  );
}
