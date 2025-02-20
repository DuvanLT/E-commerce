'use client'
import { useContext} from "react"
import { CartContext } from "../context/CartProvider"
import { useRouter } from "next/navigation"
import Image from "next/image"
export default function Cart() {
    const {cart,incrementCart,lessCart} = useContext(CartContext)
    const router = useRouter()

    return (
        <div className="carrito_container">
            <h1 className="carrito">Your cart</h1>
            {cart.length === 0 ? (
                <p className="sinitems">Any product here. let's buy something <b onClick={() => { router.push('/')}}>Click here</b></p>
            ) : (
                <ul className="items_carrito">
                    {cart.map((item, index) => (
                        <li key={index}>
                                 <div className="image_container">
                                <Image src={item.image} alt={item.title} width={300} height={300} />
                                </div>
                            <div>
                            <h2>{item.title}</h2>
                            <p className="categoria_carrito">{item.category}</p>
                            <div className="cantidad_carrito">
                            <button onClick={()=> {lessCart(item.id)}}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={()=> {incrementCart(item.id)}}>+</button>
                            </div>
                            <p className="price_ac">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
