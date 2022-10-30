import React from 'react';
import product from "../context";
import Cards from "../Card/Card";

const Store = ({ handleClick }) => {
  return (
    <>
      {/* TRICK OR TREAT */}
      <section className="section trick" id="trick">
        <h2 className="section__title">Trick Or Treat</h2>
        <div className="trick__container container grid">
          {/* Mapping the data from the object */}
          {product.map((item, index) => (
            <Cards key={index} item={item} handleClick={handleClick} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Store;