import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const initialProduct = 24;
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(initialProduct);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleLoadMore = () => {
        setLoadProduct(loadProduct + initialProduct);
    };

    return (
        <div className="shop-container">
            <h2 className="shop-title">Just For You</h2>
            <div className="products">
                {
                    products?.slice(0, loadProduct).map(product => <Products key={product.key} product={product} />)
                }
            </div>
            {
                loadProduct < products.length && <div className="product-load-more">
                    <button onClick={handleLoadMore} className="load-more-btn highlight-color">Load More</button>
                </div>
            }
        </div>
    );
};

export default Shop;