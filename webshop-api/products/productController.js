import {
  getAllProducts,
  getFilteredProducts,
  getProductById,
  getCategoryNames,
} from "./productModel.js";

export async function allProducts(req, res) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function productById(req, res) {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch {
    res.status(500).send("Invalid ID");
  }
}

export async function filteredProducts(req, res) {
  try {
    const queryCategory = req.query.category;
    const products = await getFilteredProducts(queryCategory);
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function categories(req, res) {
  try {
    const productCategories = await getCategoryNames();
    res.json({productCategories});
  } catch (error){
    res.status(500).send(error.message);
  }

}
