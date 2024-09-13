'use client'
import { useRouter } from "next/navigation"
export default function Header() {
    const router = useRouter()
    return(
        <>
        <header>
            <nav className="top_nav">
            <div className="logo">
            Emezon
            </div>
            <input type="text" placeholder="Slim fit" />
            <div className="shopycar">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24"><path fill="#000000" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg>
                </button>
            </div>
            </nav>
            <nav className="bottom_nav">
                <ul>
                    <li  onClick={() => {router.push("/jewellery")}}>Jewellery</li>
                    <li  onClick={() => {router.push("/electronics")}}>Eletronics</li>
                    <li  onClick={() => {router.push("/mens-clothing")}}>Mens</li>
                    <li  onClick={() => {router.push("/women-clothing")}}>Women</li>
                </ul>
        </nav>
        </header>
    
        </>
    )
}