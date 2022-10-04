import React from 'react';
import StarRatings from 'react-star-ratings';
import './Products.css';

const Products = ({ product }) => {
    const { _id, name, star, starCount, img, price } = product;
    return (
        <div className="product">
            <div className="product-img-area">
                <img src={img} alt="" />
            </div>
            <div className="product-text-area">
                <h4 className="product-name">{name.split(" ").slice(0, 6).join(" ")}</h4>
                <h3 className="highlight-color2 product-price">৳{price}</h3>
                <p className="product-price-percentise"><span>৳34</span> -34%</p>
                <StarRatings
                    className="product-star"
                    rating={star}
                    starRatedColor="#FACA51"
                    starEmptyColor="darkgray"
                    starSpacing="0"
                    starDimension="12px"
                    numberOfStars={5}
                />
                <small> ({starCount})</small>
            </div>
        </div>
    );
};

export default Products;