'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState,useContext } from 'react';
import useFetch from '../../api/Api';
import Card from '@/app/component/Card';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/app/context/CartProvider';
import Image from 'next/image';

export default function Product() {
    const router = useRouter()
    const { data: productData, error: productError } = useFetch('https://fakestoreapi.com/products/');
    const [similarData, setSimilarData] = useState([]);
    const {addToCart} = useContext(CartContext); 
    
    const params = useParams();
    const id = params ? params.id : null;

    const item = productData?.find((item) => item.id === parseInt(id));

    useEffect(() => {
        if (item) {
            const fetchSimilarProducts = async () => {
                try {
                    const response = await fetch(`https://fakestoreapi.com/products/category/${item.category}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const result = await response.json();
                    const filteredSimilarProducts = result.filter((similarItem) => similarItem.id !== item.id).slice(0,4);
                    setSimilarData(filteredSimilarProducts);
                } catch (error) {
                    setErrorSimilar(error.message);
                } 
            };

            fetchSimilarProducts();
        }
    }, [item]);

    if (productError) return <p>Error loading data</p>;
    if (!item) return <p>Loading...</p>;

    return (
        <>  
        <section className="dinamic">
            <div className='dinamic_container'>
                <picture className='dinamic_photo'>
                    <Image src={item.image} alt={item.title} width={300} height={300} />
                </picture>
                <div className='dinamic_information'>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p className='price'>${item.price}</p>
                    <div className='dinamic_button'>
                        <div className="buttons_container">
                            <button onClick={() => {addToCart(item)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24"><path fill="#000000" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg>
                                Add to Cart
                            </button>
                        </div>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </section>
        <h2 className='similar'>MÁS DE LO QUE BUSCAS:</h2>
        <div className='container'>
            {similarData?.map(similarItem => (
                <div key={similarItem.id} onClick={() => { router.push(`/product/${similarItem.id}`) }}>
                    <Card title={similarItem.title} image={similarItem.image} price={similarItem.price} />
                </div>
            ))}
        </div>
        </>
    );
}
