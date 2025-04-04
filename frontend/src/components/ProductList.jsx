import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const fetchProducts = async () => {
            try{
                const response = await axios.get('/api/spooncular/products?query=apple&number=5');
                setProducts(response.data);
                setLoading(false);
            } catch(error){
                setError('Error fetching products');
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;