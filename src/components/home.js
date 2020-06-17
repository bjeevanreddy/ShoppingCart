import React from 'react';
import {Link} from 'react-router-dom'
const Home=()=>{
//    const gotocart=()=>{
//        console.log(props);
//    }
    return(
        <div>
            <button><Link to='/shop'>CART</Link></button>
           
        </div>
    )
}

export default Home;