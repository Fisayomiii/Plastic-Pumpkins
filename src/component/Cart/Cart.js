import React, { useState, useEffect } from "react";
// import '../cart/cart.css';

const Cart = ({ cart, handleChange }) => {
  const [price, setPrice] = useState(0);

  // const handleRemove = (id) => {
  //   const arr = cart.splice((item) => item.id !== id);
  //   setCart(arr);
  //   handlePrice();
  // };
//   const handleClick = (item) => {
//     cart.splice(item, 1)
//     // if (cart.indexOf(item) !== 0) return;
//     setPrice([...cart, item]);
//     handlePrice();
//   }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <div >
        <div id="cart" className="cart blur">
          <h2 className="cart__title-center">My Cart</h2>
          {cart.map((item,index) => (
            <div key={index}>
              <div className="cart__container">
                <article className="cart__card">
                  <div className="cart__box">
                    <img src={item.img} alt="" className="cart__img" />
                  </div>

                  <div className="cart__details">
                    <h3 className="cart__title">{item.label}</h3>
                    <span className="cart__price">$ {item.price}.00</span>

                    <div className="cart__amount">
                      <div className="cart__amount-content">
                        <span className="cart__amount-box" onClick={() => handleChange(item, -1)}>
                          <i className='bx bx-minus'></i>
                        </span>

                        <span className="cart__amount-number">{item.amount}</span>

                        <span className="cart__amount-box" onClick={() => handleChange(item, 1)}>
                          <i className='bx bx-plus'></i>
                        </span>
                      </div>
                      {/* <i className='bx bx-trash-alt cart__amount-trash' onClick={() => handleClick(item)}>T</i> */}
                      <i className='bx bx-trash-alt cart__amount-trash'></i>
                    </div>
                  </div>
                </article>
                <br />
              </div>
            </div>
          ))}
          <div className="cart__prices">
            <span className="cart__prices-item">Total</span>
            <span className="cart__prices-total">${price}.00</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart