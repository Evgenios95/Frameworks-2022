import "./style.css";
import React from "react";
import {ProductDisplay} from "../../components/ProductDisplay";

export const Home = () => {
    return <div className={"pageWrapper"}>
        <div className={'companyBanner'}>
            <h1>Coffeenator</h1>
            <p>Get your Java beans here!</p>
        </div>
        <div className={'introWrapper'}/>
        <h1> Discounted products </h1>
        <ProductDisplay/>
    </div>;
};
