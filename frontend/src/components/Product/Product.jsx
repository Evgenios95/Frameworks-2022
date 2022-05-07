import "./style.css";
import React, {useState} from "react";

export const Product = ({product}) => {
    return <div className={'productWrapper'}>
        <img src={product.productImage} alt={'coffee'}/>
        <h2>{product.productName}</h2>
        <p> {product.productWeight} </p>
        <h3>{product.productPrice} DKK</h3>
        <a href={'/product/' + product.productId}>Details</a>
    </div>
};
