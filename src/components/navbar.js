import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { pro} from '../_actions'
const Navbar = ({cartlength}) => {
    return (
        <nav className="navigation">
            <div className='brand'>
                <h3 to='/' className='link'>Store</h3>
            </div>
            <div className='links'>
            <Link to='/' className='link'><div>Home</div></Link>
            <Link to='/' className='link'><div>Shop</div></Link>
           <Link to='/cart' className='link'> 
                <div className='cartlogo'><i className="fa fa-shopping-cart" aria-hidden="true"></i><span> {cartlength}</span></div>
           </Link>
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{
    const {cartlength}=state.Product
    return {
        cartlength
    }
}


export default connect(mapStateToProps)(Navbar)