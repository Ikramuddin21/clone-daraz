import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsCashCoin } from 'react-icons/bs';
import { GiReturnArrow } from 'react-icons/gi';
import { CgUnavailable } from 'react-icons/cg';
import { IoMdChatboxes } from 'react-icons/io';
import './ProductsDetails.css';
import StarRatings from 'react-star-ratings';

const ProductsDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { category, name, img, price, seller, shipping, star, starCount, stock } = product;

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
                {/* breadcrumb */}
                <div className="breadcrumb d-flex items-center">
                    <span className="d-flex items-center">
                        <Link to="/">Home</Link>
                        <MdOutlineArrowForwardIos />
                    </span>
                    <span className="d-flex items-center">
                        <Link to="">{category}</Link>
                        <MdOutlineArrowForwardIos />
                    </span>
                    <span className="product-details-name">{name}</span>
                </div>

                {/* details information */}
                <div className="details-info d-flex items-center">
                    {/* left area */}
                    <div className="product-details-left">
                        <img src={img} alt="" />
                    </div>
                    {/* middle area */}
                    <div className="product-details-middle">
                        <h3>{name}</h3>
                        <div className="product-details-rating-area">
                            <StarRatings
                                className="product-star"
                                rating={star}
                                starRatedColor="#FACA51"
                                starEmptyColor="darkgray"
                                starSpacing="0"
                                starDimension="12px"
                                numberOfStars={5}
                            />
                            <span className="star-count">{starCount} Ratings</span>
                            <span>0 Answered Questions</span>
                        </div>
                        <div className="brand-area">
                            <p className="brand-name">
                                <span>Brand:</span>
                                <span> No Brand</span>
                            </p>
                            <span>More {category?.charAt(0).toUpperCase() + category?.slice(1)} from No Brand</span>
                        </div>
                        <div className="product-details-price-area">
                            <h1 className="highlight-color">৳ {Math.ceil(price / 100 * 80)}</h1>
                            <p>
                                <span>৳{Math.ceil(price)}</span>
                                <span>-20%</span>
                            </p>
                        </div>
                        {
                            stock && <p className="stock">Stock: {stock}</p>
                        }
                        <div className="quantity-area d-flex items-center">
                            <span>Quantity</span>
                            <div className="d-flex items-center">
                                <button className="minus-btn">-</button>
                                <input type="text" value="1" />
                                <button className="plus-btn">+</button>
                            </div>
                        </div>
                        <div className="buy-now-cart-btn">
                            <button className="btn-buy-now">Buy Now</button>
                            <button className="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>
                    {/* right area */}
                    <div className="product-details-right">
                        <div className="delivery-area">
                            <div className="delivery-top d-flex items-center">
                                <span>Delivery</span>
                                <IoIosInformationCircleOutline />
                            </div>
                            <div className="location-area d-flex items-center">
                                <GrLocation />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                            <div className="standard-delivery d-flex items-center">
                                <div className="d-flex">
                                    <TbTruckDelivery />
                                    <div>
                                        <p>Standard Delivery</p>
                                        <p>3 - 6 days</p>
                                    </div>
                                </div>
                                <span>৳ 60</span>
                            </div>
                            <div className="cash-on-delivery d-flex items-center">
                                <BsCashCoin />
                                <span>Cash on Delivery Available</span>
                            </div>
                        </div>

                        <div className="service-area">
                            <div className="service-top d-flex items-center">
                                <span>Service</span>
                                <IoIosInformationCircleOutline />
                            </div>
                            <div className="returns-area d-flex">
                                <GiReturnArrow />
                                <div>
                                    <p>7 Days Returns</p>
                                    <p>Change of mind is not applicable</p>
                                </div>
                            </div>
                            <div className="warranty-area d-flex items-center">
                                <CgUnavailable />
                                <span>Warranty not available</span>
                            </div>
                        </div>

                        <div className="sold-area">
                            <div className="sold-by d-flex items-center">
                                <div>
                                    <span>Sold by</span>
                                    <p>{seller}</p>
                                </div>
                                <span>
                                    <IoMdChatboxes />
                                    Chat
                                </span>
                            </div>
                            <div className="d-flex items-center">
                                <div>
                                    <span>Positive Seller Ratings</span>
                                    <h2>85%</h2>
                                </div>
                                <div>
                                    <span>Ship on Time</span>
                                    <h2>98%</h2>
                                </div>
                                <div>
                                    <span>Chat Response Rate</span>
                                    <h2>87%</h2>
                                </div>
                            </div>
                            <Link className="visit-store" to="">Visit Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;