import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Library from './Component/Library/Library';
import Cart from './Component/Cart/Cart';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) =>{
    // console.log(item);
    let isPresent = false;
    cart.forEach(product => {
      if(item.id === product.id){
        isPresent = true;
      }
    });

    if(isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      }, 2000)
      return;
    }
   setCart([...cart, item]);
  }
  return (
    <div className="App">
      <Navbar size={cart.length}></Navbar>
 
    <Library cart={cart} handleClick = {handleClick} key={cart.id}></Library> 


     
       {
        warning && <div className='setWarning'><p>Item is already added*</p></div>
       
       }
       
    </div>
  );
}

export default App;
