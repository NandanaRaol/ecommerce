import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product"; 

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let idx = 0; idx < all_product.length; idx++) {
        cart[all_product[idx].id] = 0;  
    }
    return cart;
}

const ShopcontextProvider = (props) => {
    const [cartitems, setcartitems] = useState(getDefaultCart());

    const addtocart = (itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    };
    const removefromcart = (itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    };
    const gettotalcartamount = () => {
        let ta = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                ta += iteminfo.new_price * cartitems[item];
            }
        }
        return ta;
    };
    const gettotalcartitems = () => {
        let ti = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                ti += cartitems[item];
            }
        }
        return ti;
    };
    const contextValue = { 
        gettotalcartitems,  
        gettotalcartamount, 
        all_product, 
        cartitems, 
        addtocart, 
        removefromcart
    };
    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};
export default ShopcontextProvider;

