import React, { useState } from "react";
import "./styles/styles.css";
import "./styles/cart.css";
import Navbar from "./component/Header/Navbar";
import Home from "./component/Home/Home";
import Scarecategory from "./component/Scare category/Scarecategory";
import About from "./component/About/About";
import Store from "./component/Trickortreat/Store";
import Discount from "./component/Discount/Discount";
import NewArrivals from "./component/New Arrivals/NewArrivals";
import Newsletter from "./component/Newsletter/Newsletter";
import Footer from "./component/Footer/Footer";
import Cart from "./component/Cart/Cart";

function App() {
  const [Show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  
  return (
    <>
      <React.Fragment>
        <Navbar setShow={setShow} size={cart.length} />
        <Home />
        <Scarecategory />
        <About />
        {Show ?
          <Store handleClick={handleClick} />
          :
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        }
        <Discount />
        <NewArrivals />
        <Newsletter />
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;
