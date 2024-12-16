import React, { useContext } from 'react';
import './Productdisplay.css';
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { Shopcontext } from "../../context/Shopcontext";
const Productdisplay = (props) => {
  const { product } = props;
  const {addtocart}=useContext(Shopcontext);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt="Product view 1" />
          <img src={product.image} alt="Product view 2" />
          <img src={product.image} alt="Product view 3" />
          <img src={product.image} alt="Product view 4" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_dull_icon} alt="Star dull rating" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline 
          and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-size-options'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
      
      </div>
    </div>
  );
};

export default Productdisplay;
