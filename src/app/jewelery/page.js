'use client'
import PageCategoryContent from "../components/PageCategoryContent"
import { PRICERANGE_JEWELERY } from "../constants/priceRanges"
export default function jewelery() {
    return(
        <>
        <PageCategoryContent productCategory={"jewelery"} priceRange={PRICERANGE_JEWELERY} />
        </>
    )
}