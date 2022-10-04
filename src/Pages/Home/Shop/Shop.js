import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    console.log(products);
    return (
        <div className="shop-container">
            <h2 className="shop-title">Just For You</h2>
            <div className="products">
                {
                    products.map(product => <Products key={product.key} product={product} />)
                }
            </div>
        </div>
    );
};

export default Shop;