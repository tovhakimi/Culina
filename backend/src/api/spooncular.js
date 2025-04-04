const axios = require('axios');
const express = require('express');
const router = express.Router();

const API_KEY = '8037d57d69ea46e18bdc8366605b7461';

router.get('/products', async (req, res) => {
    const query = req.query.query;
    const number = req.query.number;

    if (!query){
        return res.status(400).json({message: "Query parameter is required!"});
    }
    try{
        const url = `https://api.spoonacular.com/food/products/search?query=${encodeURIComponent(query)}&number=${number}&apiKey=${API_KEY}`;
        const response = await axios.get(url);

        if (!response.data.products || s.length === 0) {response.data.product
            return res.status(404).json({ message: "No products found." });
        }

        const products = response.data.products.map(p => ({
            name: p.title,
            id: p.id,
            image: p.image ? `https://spoonacular.com/productImages/${p.id}-312x231.jpg` : 'No image available',
            description: p.description || 'No description available.'
        }) );

        res.json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;