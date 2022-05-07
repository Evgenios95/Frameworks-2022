import "./style.css";
import React, {useState} from "react";
import {Product} from "../Product";

export const ProductDisplay = ({products}) => {
    return <div className={'productDisplay'}>
        {products.map((product) => <Product key={product.productId} product={product}/>)}
    </div>
};
