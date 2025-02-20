import { useContext } from "react"
import { CartContext } from "../context/CartProvider"
import Image from "next/image"
import shoppingCart from "/public/cart.svg"

export default function Card({ title, image, price, description, category,id }) {
    const {addToCart} = useContext(CartContext)

    const handleAddToCart = (event) => {
       event.stopPropagation()
        addToCart({ title, price, image, description, category, id }) 
    }

    return (
        <div className="card_container">
            <div className="image_container">
                <Image src={image} alt={title} width={300} height={300} />
            </div>
            <div className="card_info">
                <h2>{title}</h2>
                <p className="howmuch">$ {price}</p>
            </div>
            <div className="buttons_container">
                <button onClick={handleAddToCart}>
                   <Image src={shoppingCart} alt="shopping cart" />
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
