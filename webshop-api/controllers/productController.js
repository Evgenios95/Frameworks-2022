export async function allProducts(req, res) {
    try {
        const x = 10 / 0
    } catch (error) {
        res.status(500).send(error.message);
    }
}