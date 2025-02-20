import useFetch from '../hooks/useFetch'
import Link from 'next/link'
import useFilteredProducts from '../hooks/useFilteredProducts'
import Card from "../components/Card"
import { PriceProvider, PriceContext } from '../context/PriceContext'
import { useContext } from 'react'
import Aside from '../components/Aside'
export default function PageCategoryContent({productCategory, priceRange}) {
        const { data } = useFetch(`https://fakestoreapi.com/products/category/${productCategory}`)
        return (
            <PriceProvider>
                <ProductsContent data={data} priceRanges={priceRange} />
            </PriceProvider>
        )
    }

    function ProductsContent({ data, priceRanges}) {
        const categoryName = data.length > 0 ? data[0].category : ""
        const { priceRange } = useContext(PriceContext)
        const filteredProducts = useFilteredProducts(data,priceRange)

    return( 
        <div className='products'>
        <Link className='startpoint' href={("/")}>Home / </Link><span className='endpoint'>{categoryName}</span>
        <main>
        <Aside priceRanges={priceRanges}/>
        <div className='container'>
            {filteredProducts.map(item => (
            <Link className='container__product' onClick={() => {}} key={item.id} href={(`/product/${item.id}`)}>
            <Card title={item.title} image={item.image} price={item.price}/></Link>
            ))}
        </div>
        </main>
        </div>
    )
}