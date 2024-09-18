'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useFetch from "../api/Api"
import Card from "./Card"
export default function Header() {
    const router = useRouter()
    const [query, setQuery] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])
    const {data} = useFetch(`https://fakestoreapi.com/products`)


    function handleChange(event) {
        const searchQuery = event.target.value
        setQuery(searchQuery)
    }

    useEffect(() => {
        if (query && data) { 
            const searchProducts = () => {
                const searchFilter = data.filter((item) =>
                    item.title.toLowerCase().includes(query.toLowerCase())
                )
                setFilteredProducts(searchFilter) 
            }
            searchProducts()
        } else {
            setFilteredProducts([])
        }
    },[query, data]) 

    return(
        <>
        <header>
            <nav className="top_nav">
            <div className="logo" onClick={() => { router.push(`/`)   }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2048 2048"><path fill="#eab308" d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354zm0 640l177-89l-463-265l-211 106zm315-157l182-91l-497-249l-149 75zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288zm-640 710v-455l-384-192v454zm64-566l369-184l-369-185l-369 185zm576-1l448-224l448 224v527l-448 224l-448-224zm384 576v-305l-256-128v305zm384-128v-305l-256 128v305zm-320-288l241-121l-241-120l-241 120z"/></svg> MARKIT
            </div>
            <form className="form_desktop"  onSubmit={(e) => e.preventDefault()}   >
            <input type="text" placeholder="Search a product" name="search"  onChange={handleChange}/>
            </form>
            <div className="shopycar">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 24 24"><path fill="#000000" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg>
                </button>
            </div>
            </nav>
            <form className="phone_input" onSubmit={(e) => e.preventDefault()} >
            <input type="text" placeholder="Search a product" name="search" onChange={handleChange} />
            </form>
        </header>

        <div>
                {filteredProducts.length > 0 ? (
                    <div className='container'>
                        {filteredProducts.map((item) => (
                            <div key={item.id} onClick={() => { router.push(`/product/${item.id}`) }}>
                                <Card title={item.title} image={item.image} price={item.price} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
    
        </>
    )
}