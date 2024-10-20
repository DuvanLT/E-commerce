'use client'
import { useContext} from "react";
import { CartContext } from "../context/CartProvider";

export default function Cart() {
    const [cart] = useContext(CartContext);
    
    return (
        <div className="">
            <h1 className="carrito">Tu Carrito</h1>
            {cart.length === 0 ? (
                <p className="sinitems">No hay productos en tu carrito.</p>
            ) : (
                <ul className="items_carrito">
                    {cart.map((item, index) => (
                        <li key={index}>
                                 <div className="image_container">
                                <img src={item.image} alt={item.title} />
                                </div>
                            <div>
                            <h2>{item.title}</h2>
                            <p className="categoria_carrito">{item.category}</p>
                            <div className="cantidad_carrito">
                            <button>-</button>
                            <p>{item.quantity}</p>
                            <button>+</button>
                            </div>
                            <p className="price_ac">${item.price * item.quantity}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
