import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const initialProduct = 24;
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(initialProduct);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://clone-daraz-server.onrender.com/products"
      );
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // load more products
  const handleLoadMore = () => {
    setLoadProduct(loadProduct + initialProduct);
  };

  // handle products details
  const handleProductDetails = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className="shop-container">
      <h2 className="shop-title">Just For You</h2>
      <div className="products">
        {products?.slice(0, loadProduct).map((product) => (
          <Products
            key={product.key}
            product={product}
            handleProductDetails={handleProductDetails}
          />
        ))}
      </div>
      {loadProduct < products.length && (
        <div className="product-load-more">
          <button
            onClick={handleLoadMore}
            className="load-more-btn highlight-color"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
