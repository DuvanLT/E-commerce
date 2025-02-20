import shoppingCart from '/public/cart.svg'
import Image from 'next/image'
import { CartContext } from '@/app/context/CartProvider'
import { useContext } from 'react'
export default function ShowProduct({title, description, image, price}) {
    const {addToCart} = useContext(CartContext)
    return (
        <>
         <section className="dinamic">
                    <div className='dinamic_container'>
                        <picture className='dinamic_photo'>
                            <Image src={image} alt={title} width={300} height={300} />
                        </picture>
                        <div className='dinamic_information'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p className='price'>${price}</p>
                            <div className='dinamic_button'>
                                <div className="buttons_container">
                                    <button onClick={() => {addToCart(data)}}>
                                        <Image src={shoppingCart} alt='Shopping cart' />
                                        Add to Cart
                                    </button>
                                </div>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}