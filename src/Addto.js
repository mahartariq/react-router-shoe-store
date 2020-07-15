import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './shoe.json';
import './App.css';

function Addto() {
    const { id } = useParams();
    const shoe = Shoes[id];
    console.log(shoe);

    if (!shoe)
        return <h2>Product Not Found</h2>

    return (
            <div>
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img} height={500} alt="Shoe Image" />
                        <br></br>
                        
                       
                        <button >  Add to Cart</button>
                    </div>
    )
}

export default Addto;