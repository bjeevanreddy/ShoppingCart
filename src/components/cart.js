import React,{useEffect} from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Navbar from './navbar'
import { productActions } from '../_actions'

const Cart = (props) => {
    const { cart, cartlength, cartTotal } = props;
    useEffect(()=>{
        if(cartlength===0){
            setTimeout(() => {
                props.history.push('/')
            }, 2000)
        }
    })
    function decrement(id) {
        props.decrease(id);
    }
    function increment(id) {
        props.increase(id);
    }
    function removeitem(id) {
        props.removeproduct(id);
    }
    function clearcart() {
        props.clearcart();
    }

    
    return (
        <React.Fragment>
            <Navbar />
            <div className='cart'>
                <div className='card-header'>
                    <h3>Cart</h3>
                </div>
                <div className='card-body'>
                    {
                        cartlength > 0 ?
                            cart.map(item => (
                                <React.Fragment key={item.id}>
                                    <div className='singleitem'>
                                        <div className='cartimage'><span onClick={() => removeitem(item.id)}>
                                            <i className="fa fa-trash" aria-hidden="true" style={{ color: 'red', fontSize: '24px' }}></i></span>
                                            <img src={item.imgUrl} alt={item.name} /></div>
                                        <div className='cartproduct'>
                                            <span>{item.name}</span>
                                            <div className='quantitybuttons'>
                                                <button onClick={() => decrement(item.id)}><strong>-</strong></button><span>{item.quantity}</span>
                                                <button onClick={() => increment(item.id)}><strong>+</strong></button>
                                            </div>
                                            <span>Price: {item.price}</span>
                                        </div>
                                        <div className='cartproducttotal'>
                                            <small>Price:{item.quantity * item.price}</small>
                                        </div>

                                    </div> <hr />
                                </React.Fragment>


                            ))
                            :
                            <div className='emptycart'>Cart is Empty please Add Products</div>
                    }
                </div>
              
                    <div className='card-footer'>
                        <div><button onClick={() => clearcart()} disabled={!cartlength > 0}>Clear Cart <i className="fa fa-trash" aria-hidden="true"></i></button></div>
                        <div><h1><strong>Rs.{cartTotal}</strong></h1><small>will include Rs.50 shipping</small></div>
                        <div><Link to='/checkout'><button onClick={() => props.checkout()} disabled={!cartlength > 0}>Checkout</button></Link></div>
                        
                    </div>
                    
            </div>
        </React.Fragment>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        decrease: (id) => dispatch(productActions.removequantity(id)),
        increase: (id) => dispatch(productActions.addquantity(id)),
        removeproduct: (id) => dispatch(productActions.removeProduct(id)),
        clearcart: () => dispatch(productActions.clearcart()),
        checkout: () => dispatch(productActions.checkout())

    }
}

function mapStateToProps(state) {
    const { cartlength, cartTotal, cart } = state.Product
    return {
        cartlength, cartTotal, cart

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

