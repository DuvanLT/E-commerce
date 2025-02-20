'use client'
import PageCategoryContent from "../components/PageCategoryContent"
import { PRICERANGE_MEN } from "../constants/priceRanges"
export default function mens() {
    return(
        <>
        <PageCategoryContent priceRange={PRICERANGE_MEN} productCategory={"men's clothing"} />
        </>
    )
}