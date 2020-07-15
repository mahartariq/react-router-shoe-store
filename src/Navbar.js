import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Navbar(){
    return(
        <div>
            <ul>
  
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/">Home</Link></li>
            
            </ul> 
        </div>
    )
}
export default Navbar;