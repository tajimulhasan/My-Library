import React from 'react';
import './Cards.css'
    const Cards = ({item, handleClick}) => {
    // console.log(item);
    const {title, price, img, author} = item;
    return (
        <div className='cards'>
            <div className="image-box">
              <img src={img} alt="Images" />
            </div>
            <div className="card-details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Price: ${price}</p>
                <button className='cart-btn' onClick={() => handleClick(item)}>Add to Cart <i className="fas fa-cart-plus" id='cart-btn-icon'></i></button>
            </div>
          <div className="div">
            
          </div>
        </div>
        
    );
};

export default Cards;