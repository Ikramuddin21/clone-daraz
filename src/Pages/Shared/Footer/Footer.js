import React from 'react';
import { Link } from 'react-router-dom';
import { footerDaraz, socialMedia } from '../../../temp/data';
import logo from '../../../images/footer/logo2.png';
import appStore from '../../../images/footer/app-store.jpg';
import playStore from '../../../images/footer/google-play.jpg';
import paymentMethod from '../../../images/footer/payments.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div>
                    <div>
                        <h3>Customer Care</h3>
                        <ul>
                            <li>
                                <Link to="/">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/">How to Buy</Link>
                            </li>
                            <li>
                                <Link to="/">Returns & Refunds</Link>
                            </li>
                            <li>
                                <Link to="/">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/">Terms & conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-earn-daraz">
                        <h3>Earn With Daraz</h3>
                        <ul>
                            <li>
                                <Link to="/">Daraz University</Link>
                            </li>
                            <li>
                                <Link to="/">Sell on Daraz</Link>
                            </li>
                            <li>
                                <Link to="/">Code of Conduct</Link>
                            </li>
                            <li>
                                <Link to="/">Join the Daraz Affiliate Program</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-daraz">
                    <h3>Daraz</h3>
                    <ul>
                        {
                            footerDaraz.map((item, index) => <li key={index}>
                                <Link to="/">{item}</Link>
                            </li>)
                        }
                    </ul>
                </div>

                <div>
                    <div className="d-flex items-center footer-logo-area">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                        <div>
                            <p className="highlight-color">Happy Shopping</p>
                            <p>Download App</p>
                        </div>
                    </div>
                    <div className="d-flex download-app-link">
                        <img src={appStore} alt="" />
                        <img src={playStore} alt="" />
                    </div>
                </div>

                <div className="payment-methods-area">
                    <img className="payment-method" src={paymentMethod} alt="" />
                    <div className="social-media">
                        {
                            socialMedia.map((item, index) => <img key={index} src={item} alt="" />)
                        }
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <p>Copyright &copy; Ikram Uddin 2022</p>
            </div>
        </footer>
    );
};

export default Footer;