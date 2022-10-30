import React from 'react';
import new1img from '../img/new1-img.png';
import new2img from '../img/new2-img.png';
import new3img from '../img/new3-img.png';
import new4img from '../img/new4-img.png';
import new5img from '../img/new5-img.png';
import new6img from '../img/new6-img.png';
function NewArrivals() {
    return (
        <>
            {/* NEW ARRIVALS*/}
            <section className="section trick" id="new">
                <h2 className="section__title">New Arrivals</h2>

                <div className="trick__container container grid">
                    <div className="trick__content">
                        <div className="new__tag">New</div>
                        <img src={new5img} alt="" className="new__img" />
                        <h3 className="new__title">Terrifying Crystal Ball</h3>
                        <span className="new__subtitle">Accessory</span>
                        <div className="new__prices">
                            <span className="new__price">$5.99</span>
                            <span className="new__discount">$12.99</span>
                        </div>
                        <button className="button trick__button">
                            <i className='bx bx-cart-add trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <div className="new__tag">New</div>
                        <img src={new1img} alt="" className="new__img" />
                        <h3 className="new__title">Haunted House</h3>
                        <span className="new__subtitle">Accessory</span>
                        <div className="new__prices">
                            <span className="new__price">$14.99</span>
                            <span className="new__discount">$29.99</span>
                        </div>
                        <button className="button trick__button">
                            <i className='bx bx-cart-add trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <div className="new__tag">New</div>
                        <img src={new3img} alt="" className="new__img" />
                        <h3 className="new__title">Witch Hat</h3>
                        <span className="new__subtitle">Accessory</span>
                        <div className="new__prices">
                            <span className="new__price">$4.99</span>
                            <span className="new__discount">$9.99</span>
                        </div>
                        <button className="button trick__button">
                            <i className='bx bx-cart-add trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <div className="new__tag">New</div>
                        <img src={new4img} alt="" className="new__img" />
                        <h3 className="new__title">Grave Stone</h3>
                        <span className="new__subtitle">Accessory</span>
                        <div className="new__prices">
                            <span className="new__price">$24.99</span>
                            <span className="new__discount">$44.99</span>
                        </div>
                        <button className="button trick__button">
                            <i className='bx bx-cart-add trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <div className="new__tag">New</div>
                        <img src={new2img} alt="" className="new__img" />
                        <h3 className="new__title">Halloween Candle</h3>
                        <span className="new__subtitle">Accessory</span>
                        <div className="new__prices">
                            <span className="new__price">$11.99</span>
                            <span className="new__discount">$21.99</span>
                        </div>
                        <button className="button trick__button">
                            <i className='bx bx-cart-add trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <div className="new__tag">New</div>
                        <img src={new6img} alt="" className="new__img" />
                        <h3 className="new__title">Witch Broom</h3>
                        <span className="new__subtitle">Accessory</span>
                        <div className="new__prices">
                            <span className="new__price">$7.99</span>
                            <span className="new__discount">$14.99</span>
                        </div>
                        <button className="button trick__button">
                            <i className='bx bx-cart-add trick__icon'></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrivals