export function filterByBrand(products, value) {
  if (value === "") return products;
  return products.filter(
    (product) => product["productCategories"]["brand"] === value
  );
}

export function filterForDiscountedProducts(products, value) {
  if (value === "") return products;
  else if (value === true || value === "true") {
    return products.filter((product) => product.discountAmount !== "no");
  } else {
    return products.filter((product) => product.discountAmount === "no");
  }
}

export function filterByRoast(products, value) {
  if (value === "") return products;
  return products.filter(
    (product) => product["productCategories"]["roast"] === value
  );
}
