'use client'
import useFetch from './hooks/useFetch'
import Card from './components/Card'
import Link from 'next/link'
import Category from './components/Category'
export default function Home() {
    const { data } = useFetch('https://fakestoreapi.com/products?limit=20')
    return (
      <div className='ecommerce'>
      <Category />
        <h1 className='allproducts'>All our Products</h1>
        <div className='container'>
            {data.map(item => (
            <Link   className='container__product' key={item.id} href={(`/product/${item.id}`)}>
             <Card title={item.title} image={item.image} price={item.price} category={item.category} description={item.description} id={item.id} />
             </Link>
            ))}
        </div>
     </div>
  )
}
