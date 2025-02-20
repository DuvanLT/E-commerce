'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState} from 'react'
import Link from 'next/link'
import useFetch from '../../hooks/useFetch'
import Card from '@/app/components/Card'
import ShowProduct from '@/app/components/ShowProduct'

export default function Product() {
    const [similarData, setSimilarData] = useState([])
    const params = useParams()
    const id = params ? params.id : null
    const { data } = useFetch(`https://fakestoreapi.com/products/${id}`)
    useEffect(() => {
        if (data?.category) { 
            fetch(`https://fakestoreapi.com/products/category/${data.category}`)
                .then(res => res.json())
                .then(productCategory => {
                    const filteredSimilarProducts = productCategory
                        .filter(similarItem => similarItem.id !== data.id)
                        .slice(0, 4)
                    setSimilarData(filteredSimilarProducts)
                })
        }
    }, [data])

    if (!data) return <p>Loading...</p>

    return (
        <>  
        <ShowProduct image={data.image} title={data.title} description={data.description} price={data.price}/>
        <h2 className='similar'>MÁS DE LO QUE BUSCAS:</h2>
        <div className='container'>
            {similarData?.map(similarItem => (
                <Link className='container__product' key={similarItem.id} href={(`/product/${similarItem.id}`)}>
                    <Card title={similarItem.title} image={similarItem.image} price={similarItem.price} />
                </Link>
            ))}
        </div>
        </>
    )
}
