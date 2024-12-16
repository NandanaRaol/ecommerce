import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Hero from './components/hero/hero'; 
import Offers from './components/Offers/Offers';
import Popular from './components/popular/popular';
import Newcollections from './components/Newcollections/Newcollections';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/' element={<><Hero /><Popular /><Offers /><Newcollections /><Newsletter /></>} />
        <Route path='/Men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/Women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;