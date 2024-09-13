'use client'
import { useRouter } from "next/navigation"
const Categories = [
    { category: "Jewelery", image: "jewellery.jpg", route: "/jewellery" },
    { category: "Electronics", image: "Eletronics.jpg",route: "/electronics" },
    { category: "Mens", image: "Mens clothing.jpeg", route: "/mens-clothing" },
    { category: "Women", image: "Women Clothing.jpg",route: "/women-clothing" }
]


export default function Category() {
    const router = useRouter()

    return (
        <section className="category">
            {Categories.map((cat, key) => (
                <div className="category_container" key={key} onClick={() => {router.push( `${cat.route}`)}}>
                    <img src={cat.image} alt={cat.category} />
                    <p>{cat.category}</p>
                </div>
            ))}
        </section>
    )
}