import { useContext } from "react";
import { PriceContext } from "../context/PriceContext";
import { useRouter } from "next/navigation";

export default function Aside({ priceRanges }) {
    const { setPriceRange } = useContext(PriceContext);
    const router = useRouter();

  return (
    <aside className="aside">
        <div className="aside_container">
      <ul>
        <li className="aside_title">Categories</li>
        <li onClick={() => {router.push('/jewelery')}}><u>Jewelery</u></li>
        <li onClick={() => {router.push('/electronics')}}><u>Electronics</u></li>
        <li onClick={() => {router.push('/mens-clothing')}}><u>Mens</u></li>
        <li onClick={() => {router.push('/women-clothing')}}><u>Women</u></li>
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
  );
}