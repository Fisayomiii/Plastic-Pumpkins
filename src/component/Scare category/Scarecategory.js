import React from 'react';
import category1img from '../img/category1-img.png';
import category2img from '../img/category2-img.png';
import category3img from '../img/category3-img.png';
function Scarecategory() {
    return (
        <>
            <section className="section category">
                <h2 className="section__title">Favorite Scare <br /> Category</h2>
                <div className="category__container container grid">
                    <div className="category__data">
                        <img src={category1img} alt="" className="category__img" />
                        <h3 className="category__title">Ghosts</h3>
                        <p className="category__description">Choose the ghosts, the scariest there are.</p>
                    </div>

                    <div className="category__data">
                        <img src={category2img} alt="" className="category__img" />
                        <h3 className="category__title">Pumpkins</h3>
                        <p className="category__description">You look at the scariest pumpkins there is.</p>
                    </div>

                    <div className="category__data">
                        <img src={category3img} alt="" className="category__img" />
                        <h3 className="category__title">Witch Hat</h3>
                        <p className="category__description">Pick the most stylish witch hats out there.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Scarecategory