import React from 'react';
import discountimg from '../img/discount-img.png'
function Discount() {
    return (
        <>
            {/* DISCOUNT  */}
            <section className="section discount">
                <div className="discount__container container grid">
                    <div className="discount__data">
                        <h2 className="discount__title">50% Discount <br /> On New Products</h2>
                        <a href="#new" className="button">Go to new</a>
                    </div>
                    <img src={discountimg} alt="" className="discount__img" />
                </div>
            </section>
        </>
    )
}

export default Discount