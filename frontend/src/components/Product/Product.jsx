import "./style.css";
import React, {useState} from "react";

export const Product = ({product}) => {
    return <div className={'productWrapper'}>
        <img src={product.productImage} alt={'coffee'}/>
        <h2>{product.productName}</h2>
        <p> {product.productWeight} </p>
        <h4>{product.productCategories.roast}</h4>
        <h4>{product.productCategories.brand}</h4>
        <h3>{product.productPrice} DKK</h3>
        {product.discountAmount !== "no" &&
            <h4 className={'discountPrice'}>{product.productPrice + parseInt(product.discountAmount)} DKK</h4>}

        <a href={'/product/' + product.productId}>Details</a>
    </div>
};
