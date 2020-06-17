import React from 'react'
import { productActions } from '../_actions'
import { connect } from 'react-redux'
const Sort = (props) => {
    const { products, filterredproducts ,sort,filter} = props
    return (
        <div className='sort'>
            <div>
                <p>Results: {filterredproducts.length}</p>
            </div>

            <div className='sorting'>
                <label>Sort</label>&nbsp;&nbsp;
                <select value={sort} onChange={(e) => props.sortProducts(filterredproducts, e.target.value)}>
                    <option value="">select</option>
                    {/* <option value='name'>Name</option> */}
                    <option value='lowest'>Lowest</option>
                    <option value='highest'>Highest</option>
                </select>
            </div>
            <div className='filter'>
                <label>Filter: </label>&nbsp;&nbsp;
                <select value={filter} onChange={(e) => props.filterProducts(products, e.target.value)}>
                    <option value="">ALL</option>
                    <option value='ltk'> &lt;1000</option>
                    <option value='gtk'> &gt;1000</option>
                </select>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { products, filterredproducts,sort,filter } = state.Product
    return {
        products, filterredproducts,sort,filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterProducts: (p, val) => dispatch(productActions.filterProducts(p, val)),
        sortProducts: (fp, val) => dispatch(productActions.sortProducts(fp, val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort)