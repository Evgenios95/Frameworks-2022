import "./style.css";
import React, {useEffect, useState} from "react";
import {ProductDisplay} from "../../components/ProductDisplay";
import {fetchAllProducts} from "../../utils/functions";

export const Catalog = () => {
    const [shownProducts, setShownProducts] = useState(null);

    useEffect(() => {
        async function getProducts() {
            const products = await fetchAllProducts();
            setShownProducts(products)
            console.log(products)
        }

        getProducts()
    }, [])

    return <div className={'pageWrapper'}>
        {shownProducts && <ProductDisplay products={shownProducts}/>}
    </div>;
};
