import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import './ProductsDetails.css';

const ProductsDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const url = `http://localhost:5000/productDetails/${id}`;
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    console.log(product);
    return (
        <div className="products-details-container">
            <div className="products-details">
                <div className="breadcrumb d-flex items-center">
                    <span className="d-flex items-center">
                        <Link to="/">Home</Link>
                        <MdOutlineArrowForwardIos />
                    </span>
                    <span className="d-flex items-center">
                        <Link to="">{product.category}</Link>
                        <MdOutlineArrowForwardIos />
                    </span>
                    <span className="product-details-name">{product.name}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;