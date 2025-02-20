'use client'
import { PRICERANGE_ELECTRONIC } from '../constants/priceRanges'
import PageCategoryContent from '../components/PageCategoryContent'
export default function Electronics() {
    return(
    <>
    <PageCategoryContent productCategory={"electronics"} priceRange={PRICERANGE_ELECTRONIC} />
    </>
    )
}