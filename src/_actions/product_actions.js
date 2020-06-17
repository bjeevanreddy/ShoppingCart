import {productConstants} from '../_constants/product_constants'

export const productActions={
    getproducts,
    addtocart,
    addquantity,
    removequantity,
    removeProduct,
    clearcart,
    checkout,
    paymentDone,
    filterProducts,
    sortProducts
}
function getproducts(){
    
    return {type:productConstants.ALL_PRODUCTS}
}
function addtocart(id){
    return {
        type:productConstants.ADD_TO_CART,
        id    //product:product
    }
}
function addquantity(id){
    return {
        type: productConstants.ADD_QUANTITY,
        id
    }
}

function removequantity(id){
    return {
        type: productConstants.REMOVE_QUANTITY,
        id
    }
}

function removeProduct(id){
    return {
        type: productConstants.REMOVE_FROM_CART,
        id
    }
}

function clearcart(){
    return {
        type: productConstants.CLEAR_CART
    }

}
function checkout(){
    return {
        type: productConstants.CHECKOUT
    }
}

function paymentDone(){
    return {
        type: productConstants.PAYMENT_DONE
    }
}

function filterProducts(p,val){
    
    return {
        type: productConstants.FILTER_PRODUCTS,
        p,val
    }
}
function sortProducts(fp,val){
    
    return {
        type: productConstants.SORT_PRODUCTS,
        fp,val
    }
}