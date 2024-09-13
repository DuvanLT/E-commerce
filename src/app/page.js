'use client'
import useFetch from './api/Api';
import Card from './component/Card'
import Category from './component/Category';
export default function Home() {
 
    const { data } = useFetch('https://fakestoreapi.com/products?limit=10');

    return (
      <>
        <Category />
        <div className='container'>
            {data.map(item => (
             <Card key={item.id} title={item.title} image={item.image} price={item.price}  />
            ))}
        </div>
        </>
  );
}
