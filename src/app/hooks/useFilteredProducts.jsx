export default function useFilteredProducts(data, priceRange) {
    if (!data) return []
    return data.filter(
        (product) => product.price >= priceRange.start && product.price <= priceRange.end
    )
}


 
