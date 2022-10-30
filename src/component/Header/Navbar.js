import React from 'react';
import logo from '../img/logo.png';

const Navbar = ({ setShow, size }) => {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">

          <div className="nav__logo" onClick={() => setShow(true)}>
            <img src={logo} alt="" className="nav__logo-img" />
            Halloween
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">About</a>
              </li>

              <li className="nav__item">
                <a href="#trick" className="nav__link">Candy</a>
              </li>

              <li className="nav__item">
                <a href="#new" className="nav__link">New</a>
              </li>

              <button className="button button--ghost">Support</button>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className='bx bx-x'></i>
            </div>

            {/* <img src={navimg} alt="nav-img" className="nav__img" /> */}
          </div>

          <button className="button button--ghost" onClick={() => setShow(false)}>{size} <i className='bx bx-cart'></i></button>


          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-grid-alt'></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;