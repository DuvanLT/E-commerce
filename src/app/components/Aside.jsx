"use client"
import { useContext } from "react"
import { PriceContext } from "../context/PriceContext"
import Link from "next/link"

export default function Aside({ priceRanges }) {
    const { setPriceRange } = useContext(PriceContext)

  return (
    <aside className="aside">
        <div className="aside_container">
      <ul>
        <li className="aside_title">Categories</li>
        <Link href={('/jewelery')}><li><u>Jewelery</u></li></Link>
        <Link href={('/electronics')}><li><u>Electronics</u></li></Link>
        <Link href={('/mens-clothing')}><li><u>Mens</u></li></Link>
        <Link href={('/women-clothing')}><li><u>Women</u></li></Link>
      </ul>
      <ul>
        <li className="aside_title">Price</li>
        {priceRanges.map((range, index) => (
          <li key={index} onClick={() => setPriceRange(range)}>
            <u>${range.start} - ${range.end}</u>
          </li>
        ))}
      </ul>
      </div>
    </aside>
  )
}