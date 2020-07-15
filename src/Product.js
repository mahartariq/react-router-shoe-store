import React from 'react';
import Shoe from './shoe.json';
import { Link } from 'react-router-dom';
import './App.css';

function Product() {
    console.log(Shoe);
    return (
        <div className="product">
            {Object.keys(Shoe).map(keyName => {
                return (
                    <div>
                        <h4>{Shoe[keyName].name}</h4>
                        <img src={Shoe[keyName].img} height={170} alt="Shoe Image" />
                        <br></br>
                        
                        <Link key={keyName} className="link" to={`/product/${keyName}`}>
                        <button >  Add to Cart</button></Link>
                    </div>
               )
            })}
        </div>
    )
}
export default Product;