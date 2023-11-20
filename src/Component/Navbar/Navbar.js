import React from 'react';
import './Navbar.css';

const Navbar = ({size, setShow}) => {
    return (
             <nav className='nav-bar'>
                   <div className="nav-box">
                   <div className="logo" onClick={()=> setShow(true)}>
                    <h1>My<span id='library'>Library</span></h1>
                   </div>
                   <div className="cart" onClick={()=> setShow(false)}>
                    <i className="fas fa-cart-plus"></i>
                    <span>{size}</span>
                   </div>
                   </div>

             </nav>
        );
};

export default Navbar;