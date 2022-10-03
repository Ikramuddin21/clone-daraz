import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import appImg from '../../../images/header-download-app.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="link-bar">
                <div>
                    <ul className="d-flex items-center">
                        <li>
                            <Link className="link-bar-active-item" to="/">Save More On App</Link>
                        </li>
                        <li>
                            <Link to="/">Sell On Daraz</Link>
                        </li>
                        <li>
                            <Link to="/">Customer Care</Link>
                        </li>
                        <li>
                            <Link to="/">Track My Order</Link>
                        </li>
                        <li>
                            <Link to="/">SignUP / Login</Link>
                        </li>
                        <li>
                            <Link to="/">Daraz Affiliate Program</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="logo-bar">
                <div className="d-flex items-center">
                    <div className="logo-area">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="form-area">
                        <form className="form d-flex">
                            <input type="text" placeholder="Search in Daraz" />
                            <span className="search-icon-area d-flex items-center justify-center"><AiOutlineSearch /></span>
                        </form>
                    </div>
                    <div className="cart-area">
                        <Link to="/">
                            <FiShoppingCart />
                        </Link>
                    </div>
                    <div className="download-app">
                        <Link to="/">
                            <img src={appImg} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;