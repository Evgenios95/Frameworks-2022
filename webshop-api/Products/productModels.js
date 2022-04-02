import fs from 'fs/promises';
const products = './data/products.json'

export const getAllProducts = async () => {
    let prodstext = await fs.readFile(products)
    let prod = JSON.parse(prodstext);

    console.log(prod)
    return prod
}