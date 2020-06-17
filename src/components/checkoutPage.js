import React from 'react'
import { connect } from 'react-redux'
import { productActions } from '../_actions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Checkout = (props) => {

    const { cart, cartTotal } = props
    return (
        <div className='checkout'>
            <div className='checkoutHeader'>
                <div>
                    <strong style={{ color: 'red' }}>Shipping details</strong>
                </div>

                <div className='checkoutContent'>
                    {
                        cart && cart.length > 0 && cart.map(item => (
                            <div key={item.id}>{item.quantity} * {item.name} = {item.price}</div>
                        ))
                    }

                    <div className='chekoutTotal'>Total: Rs.{cartTotal}</div>
                </div>
            </div>
            <div className='checkoutAdress'>
                <input type='text' value='John Doe' readOnly /><br />
                <input type='number' value='9000111888' readOnly /><br />
                <textarea type='text' readOnly
                    value=' 
                Somewhere In India and address can be found in google maps.
                pincode is accessible,,street where evryone roams.
               '
                    cols='50' rows='5' />
            </div>
            <div className='checkout-footer'>
                <Link to='/ThanksPage'>
                    <button
                        onClick={() => props.paymentDone()}
                        style={{
                            background: 'black',
                            color: 'white',
                            textAlign: 'center',
                            border: '1px solid black',
                            borderRadius: '5px',
                            margin: '5px'
                        }}>Pay Rs. {cartTotal}</button>
                        </Link>
           </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    const { cart, cartTotal } = state.Product
    return {
        cart, cartTotal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        paymentDone: () => dispatch(productActions.paymentDone())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)


