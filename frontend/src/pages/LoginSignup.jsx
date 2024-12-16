import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!isChecked) {
      setError('Please click the checkbox to continue');
      return;
    }

    if (name && email && password) {
      const userData = { name, email, password };
      const existingUser = JSON.parse(localStorage.getItem('user')) || {};
      if (existingUser.email === email) {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify(cartData));
      } else {
        localStorage.removeItem('cart');
      }
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-feilds">
          <input 
            type="text" 
            placeholder='Your Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder='Email Address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button onClick={handleSignup}>Continue</button>
        {error && <p className="error-message">{error}</p>}
        <p className='loginsignup-login'>
          Already have an account?<span> Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={() => setIsChecked(!isChecked)} 
          />
          <p> By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;