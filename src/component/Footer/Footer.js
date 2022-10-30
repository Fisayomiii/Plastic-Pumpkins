import React from 'react';
import logo from '../img/logo.png';
import footer1img from '../img/footer1-img.png';
import footer2img from '../img/footer2-img.png';
function Footer() {
    return (
        <>
            {/* <!--========== SCROLL TOP ==========--> */}
            <a href="/" className="scrolltop" id="scroll-top">
                <i className='bx bx-chevron-up scrolltop__icon'></i>
            </a>
            
            {/* FOOTER */}
            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content">
                        <a href="/" className="footer__logo">
                            <img src={logo} alt="" className="footer__logo-img" />
                            Halloween
                        </a>

                        <p className="footer__description">Enjoy the scariest night <br /> of your life.</p>

                        <div className="footer__social">
                            <a href="https://www.facebook.com/" target="blank" rel="noopener" className="footer__social-link">
                                <i className='bx bxl-facebook'></i>
                            </a>
                            <a href="https://www.instagram.com/" target="blank" rel="noopener" className="footer__social-link">
                                <i className='bx bxl-instagram-alt' ></i>
                            </a>
                            <a href="https://twitter.com/" target="blank" rel="noopener" className="footer__social-link">
                                <i className='bx bxl-twitter' ></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">About</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="/home" className="footer__link">About Us</a>
                            </li>
                            <li>
                                <a href="/home" className="footer__link">Features</a>
                            </li>
                            <li>
                                <a href="/home" className="footer__link">News</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Services</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="/h" className="footer__link">Pricing</a>
                            </li>
                            <li>
                                <a href="/g" className="footer__link">Discounts</a>
                            </li>
                            <li>
                                <a href="/home" className="footer__link">Shipping mode</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Company</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="/about" className="footer__link">Blog</a>
                            </li>
                            <li>
                                <a href="/about" className="footer__link">About us</a>
                            </li>
                            <li>
                                <a href="/j" className="footer__link">Our mision</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="footer__copy">© Fisayomi.</span>
                <img src={footer1img} alt="" className="footer__img-one" />
                <img src={footer2img} alt="" className="footer__img-two" />
            </footer>

        </>
    )
}

export default Footer