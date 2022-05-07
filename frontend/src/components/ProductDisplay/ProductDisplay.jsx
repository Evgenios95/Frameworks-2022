import "./style.css";
import React, {useState} from "react";
import {Product} from "../Product";

export const ProductDisplay = (props) => {
    return <div className={'productDisplay'}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
};
