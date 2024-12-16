import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Shopcontext } from '../../context/Shopcontext';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { gettotalcartitems } = useContext(Shopcontext); 

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === "Shop" && <hr />}</li>
        <li onClick={() => setMenu("Men")}> <Link  style={{textDecoration:'none'}} to='/Men'>Men</Link>{menu === "Men" && <hr />} </li>
        <li onClick={() => setMenu("Women")}><Link style={{textDecoration:'none'}} to='/Women'>Women</Link>{menu === "Women" && <hr />}</li>
        <li onClick={() => setMenu("Kids")}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link>{menu === "Kids" && <hr />}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className='nav-cart-count'>{gettotalcartitems()}</div>  
      </div>
    </div>
  );
};

export default Navbar;
