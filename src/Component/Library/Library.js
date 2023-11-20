import React from 'react';
import list from '../../data';
import './Library.css';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import Button from '../Button/Button';

const Library = ({handleClick, cart}) => {
    return (
   
        <div className='divide'>
    
            <section>
                {
                    list.map((item) => 
                        // console.log(item);
                        <Cards item={item} key={item.id} handleClick={handleClick}></Cards>
                    )

                }
              
            </section>
          <div className="div">
            <h2>Item list:</h2>
            <div className="main">
            <Cart cart={cart} key={cart.id}></Cart>
              <Button cart={cart}></Button>
                </div>
            </div>   
        </div>
        
    );
};

export default Library;