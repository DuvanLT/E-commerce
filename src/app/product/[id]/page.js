'use client';
import { useParams } from 'next/navigation';
import useFetch from '../../api/Api';

export default function Product() {
    const { data, error } = useFetch('https://fakestoreapi.com/products/');
    const params = useParams();
    const id = params ? params.id : null;
    if (error) return <p>Error loading data</p>;
    const item = data?.find((item) => item.id === parseInt(id));
    if (!item) return <p>Loading...</p>;

    return (
        <>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
        </>
    );
}
