import "./style.css";
import React, {useEffect, useState} from "react";
import {removeOneFromBasket, transformBasket} from "../../utils/functions";

export const Basket = (props) => {
        const [basketProducts, setBasketProducts] = useState([])
        const [basketTotal, setBasketTotal] = useState(0)
        useEffect(() => {
            const getBasketInfo = async () => {
                return await transformBasket(props.basket)
            }

            getBasketInfo().then(basketInfo => {
                setBasketProducts(basketInfo)
                let counter = 0;
                for (const product in basketInfo) {
                    counter += basketInfo[product].quantity * basketInfo[product].productPrice
                }
                setBasketTotal(counter);
            })
        }, [props.basket])
        console.log(props.basket)
        return <div className={"basketPage"}>
            <div className={"basketContentWrapper"}>
                {basketProducts.map(product => (
                    <div className={"basketProduct"} key={product.productId}>
                        <h1>{product.productName}</h1>
                        <p>{product.description}</p>
                        <p>{product.productWeight}</p>
                        <h3>{product.productPrice} DKK</h3>
                        <button className={"removeItem"} onClick={async () => {
                            const newBasket = await removeOneFromBasket(product.productId, props.user)
                            if (props.user) {
                                props.setUser(user => {
                                    user.basket = newBasket;
                                    return user
                                })
                            } else {
                                props.setBasket(newBasket)
                            }
                            console.log(props.basket)
                        }
                        }>-
                        </button>
                    </div>
                ))}
            </div>
            <div className={"basketSummary"}>
                <h1>Total: {basketTotal} DKK</h1>
                <button className={"checkoutButton"}>Check out</button>
            </div>
        </div>;
    }
;
