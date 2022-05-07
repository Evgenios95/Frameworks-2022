import "./style.css";
import React, {useState} from "react";
import {Product} from "../Product";
import {motion} from "framer-motion";

export const ProductDisplay = ({products}) => {
    const containerAnim = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    return <motion.div variants={containerAnim} className={'productDisplay'} initial="hidden"
                       animate="show">
        {products.map((product) => <Product key={product.productId} product={product}/>)}
    </motion.div>
};
