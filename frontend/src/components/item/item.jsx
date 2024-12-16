import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} className="product-image"  src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">
          Rs.{props.new_price}
        </div>
        <div className="item-price-old">
          {props.old_price}
        </div>
      </div>
    </div>
  );
};
export default Item;
