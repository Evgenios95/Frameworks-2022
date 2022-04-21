export function filterByBrand(products, value) {
    return products.filter(product => product['productCategories']["brand"] === value)
}

export function filterForDiscountedProducts(products, value) {
    if (value === true) {
        return products.filter(product => product.discountAmount !== "no")
    } else {
        return products.filter(product => product.discountAmount === "no")
    }
}

export function filterByRoast(products, value) {
    return products.filter(product => product['productCategories']["roast"] === value)
}