'use client'
import PageCategoryContent from "../components/PageCategoryContent"
import { PRICERANGE_WOMEN } from "../constants/priceRanges"

export default function women() {
    return (
        <>
        <PageCategoryContent productCategory={"women's clothing"} priceRange={PRICERANGE_WOMEN} />
        </>
    )
}