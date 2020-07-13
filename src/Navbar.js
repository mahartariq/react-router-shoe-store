import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
    )
}
export default Navbar;