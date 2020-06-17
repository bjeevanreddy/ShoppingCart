import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navbar from './navbar'
import { productActions } from '../_actions'
import Product from './product'
import Sort from './sort'
const ProductsPage = (props) => {
    useEffect(() => {
        props.getProducts();
    })
    const { filterredproducts} = props;
    return (
        <React.Fragment>
             <Navbar/>
             <Sort/>
            <div className='entirepage'>
                <div className='products'>
                    {filterredproducts.map(p => (
                        <Product key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(productActions.getproducts)
    }
}

function mapStateToProps(state) {
    const { filterredproducts } = state.Product
    return {
        filterredproducts

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)