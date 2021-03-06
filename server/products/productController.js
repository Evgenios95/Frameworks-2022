import {
  getAllProducts,
  getFilteredProducts,
  getProductById,
  getCategoryNames,
} from "./productModel.js";

export async function productById(req, res) {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch {
    res.status(500).send("Invalid ID");
  }
}

export async function allCategories(req, res) {
  try {
    const productCategories = await getCategoryNames();
    res.json({ productCategories });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function filterProducts(req, res) {
  try {
    const filters = req.query;
    const products = await getFilteredProducts(filters);
    res.json({ products });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
