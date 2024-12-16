import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { Shopcontext } from '../context/Shopcontext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/item/item'; 
const ShopCategory = (props) => {
  const { all_product } = useContext(Shopcontext);
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="Banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span className='bold-text'>Showing 1-12  </span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
     < div className='shopcategory-loadmore'>
      Explore more
     </div>

    </div>
  );
};

export default ShopCategory;

