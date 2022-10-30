import React from 'react';

const Card = ({ item, handleClick }) => {
    const { img, label, type, price } = item;
    return (
        <>
            <div className="trick__content">
                <img src={img} alt="" className="trick__img" />
                <h3 className="trick__title">{label}</h3>
                <span className="trick__subtitle">{type}</span>
                <span className="trick__price">$ {price}.00</span>
                <button className="button trick__button" onClick={() => handleClick(item)}>
                    <i className='bx bx-cart-add trick__icon'></i>
                    <span className="tooltip">Add to cart</span>
                </button>
            </div>

        </>
    )
}

export default Card