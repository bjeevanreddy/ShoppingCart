import React from 'react'
import {productActions} from '../_actions'
import {connect } from 'react-redux'

// const addcart=productActions.addtocart
const Product=(props)=>{
   
    const addingtocart=(p)=>{
        props.addtocart(p)
    }
    const {product}=props;
    return(   
            <div className='product'>
                <img src={product.imgUrl} alt={product.name}/>
                <p>{product.name}</p>
                <span>Rs.{product.price}</span>
                <button onClick={()=>addingtocart(product.id)}>Add to cart</button>
            </div>
    )
}

function mapDispatchToProps(dispatch){
    // const addtocart=productActions.addtocart()
    return {
        addtocart: (p)=>dispatch(productActions.addtocart(p))
    }

}

export default connect(null,mapDispatchToProps)(Product)
