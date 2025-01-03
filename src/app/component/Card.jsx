import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Image from "next/image";

export default function Card({ title, image, price, description, category,id }) {
    const {addToCart} = useContext(CartContext); 

    const handleAddToCart = (event) => {
       event.stopPropagation();
        addToCart({ title, price, image, description, category, id }) 
    };

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
