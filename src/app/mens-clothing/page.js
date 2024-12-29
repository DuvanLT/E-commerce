'use client'
import useFetch from '../api/Api';
import { useRouter } from "next/navigation"
import Card from "../component/Card"
import { PriceProvider, PriceContext } from '../context/PriceContext';
import { useContext } from 'react';
import Aside from '../component/Aside';
export default function mens() {
    const {data} = useFetch(`https://fakestoreapi.com/products/category/men's clothing`)
    const priceRanges = [
        { start: 0, end: 25 },
        { start: 25, end: 59 },
        { start: 59, end: 120 },
      ];
             return (
                    <PriceProvider>
                        <ProductsContent data={data} priceRanges={priceRanges} />
                    </PriceProvider>
                );
    }
    function ProductsContent({ data, priceRanges}) {
        const router = useRouter();
        const { priceRange } = useContext(PriceContext);
        const filteredProducts = data.filter(
            (product) => product.price >= priceRange.start && product.price <= priceRange.end
        );
    return(
        <div className='products'>
        <span className='startpoint' onClick={() => {router.push("/")}}>Home / </span><span className='endpoint'>Men</span>
        <main>
        <Aside priceRanges={priceRanges}/>
        <div className='container'>
            {filteredProducts.map(item => (
            <div  key={item.id} onClick={() => { router.push(`/product/${item.id}`)}}>
             <Card title={item.title} image={item.image} price={item.price}/>
             </div>
            ))}
        </div>
        </main>
        </div>
    )
}