import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
  return (
    <div>
      {
         cart.map((item) => (
          <div className="added-item" key={item.id}>
            <div className='image'>
            <img src={item.img} alt="" />
            </div>
            <div className='details'>
              <p>{item.title}</p>
               <p>Price: ${item.price}</p>
            </div>
          </div>
         ))
      }
    </div>
  );
};

export default Cart;