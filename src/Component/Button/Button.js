import React, { useState } from 'react';
import './Button.css'
const Button = ({cart}) => {
    const [randomObject, setRandomObject] = useState(null);
    const getRandomItem = () =>{
         const randomIndex = Math.floor(Math.random() * cart.length);
         const selectedObject = cart[randomIndex];
         setRandomObject(selectedObject);
    }
    return (
        <div className='parent'>
            <div className="choose-btn">
            <button onClick={getRandomItem}>Choose One</button>
            </div>
            {randomObject && (
                <div className='random-div'>
                    <div className='image'>
                       <img src={randomObject.img} alt="" />
                    </div>
                    <div className='details'>
                    <p>{randomObject.title}</p>
                    <p>Price: ${randomObject.price}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Button;