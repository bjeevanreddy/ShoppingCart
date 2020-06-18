import { productConstants } from '../_constants/product_constants';
import { products } from '../_helpers'
// let products=products;
// let cart=[];

const intialState = {
    cart: [],
    products,
    cartlength: 0,
    cartTotal: 0,
    filterredproducts:products,
    filter:"",
    sort:""
    // productsLength:0   
}
export function Product(state = intialState, action) {
    switch (action.type) {
        case productConstants.ALL_PRODUCTS:
            return {
                ...state,
                products
            }
        case productConstants.ADD_TO_CART:
            let addeditem = state.products.find(item => item.id === action.id);
            let incart = state.cart.find(item => action.id === item.id);
            if (incart) {
                addeditem.quantity += 1
                return {

                    ...state, cartTotal: state.cartTotal + addeditem.price
                }
            } else {
                addeditem.quantity = 1
                let newtotal = state.cartTotal + addeditem.price
                let newlength = state.cartlength + 1
                return {

                    ...state,
                    cart: [...state.cart, addeditem],
                    cartTotal: newtotal,
                    cartlength: newlength,


                }
            }
        case productConstants.ADD_QUANTITY:
            let addedproduct = state.products.find(item => item.id === action.id);
            addedproduct.quantity += 1
            return {
                ...state, cartTotal: state.cartTotal + addedproduct.price
            }
        case productConstants.REMOVE_QUANTITY:
            let selecteditem = state.products.find(item => item.id === action.id);
            //if quantity ==0 then remove from cart
            if (selecteditem.quantity === 1) {
                let newcart = state.cart.filter(item => item.id !== action.id)
                return {
                    ...state,
                    cartTotal: state.cartTotal - selecteditem.price,
                    cart: newcart,
                    cartlength: state.cartlength - 1

                }

            } else {
                selecteditem.quantity -= 1;
                let newtotal = state.cartTotal - selecteditem.price
                return {
                    ...state,
                    cartTotal: newtotal
                }
            }
        case productConstants.REMOVE_FROM_CART:
            let deletedItem = state.cart.find(item => item.id === action.id)
            let newcart = state.cart.filter(item => item.id !== action.id)
            return {
                ...state,
                cart: newcart,
                cartlength: state.cartlength - 1,
                cartTotal: state.cartTotal - (deletedItem.quantity * deletedItem.price)
            }
        case productConstants.CLEAR_CART:
            return {
                ...state,
                cartlength: 0,
                cartTotal: 0,
                cart: []
            }
        case productConstants.CHECKOUT:
            return {
                ...state,
                cartTotal: state.cartTotal + 50
            }
        case productConstants.PAYMENT_DONE:
            return {
                ...state,
                cartTotal: 0,
                cartlength: 0,
                cart: [],
                sort:"",
                filter:""
            }
        case productConstants.FILTER_PRODUCTS:
            
            if (action.val === 'gtk') {
                let gtkproducts = action.p.filter(item => item.price > 1000)
                return {
                    // results: gtkproducts.length,
                    ...state,
                    filterredproducts: gtkproducts,
                    filter:action.val
                }
            }

            else if (action.val === 'ltk') {
                let ltkproducts = action.p.filter(item => item.price < 1000)
                return {
                    // results: ltkproducts.length,
                    ...state,
                    filterredproducts: ltkproducts,
                    filter:action.val

                }
            }
            else {
                // let newproducts=products.slice();
                return {
                    ...state,
                    filterredproducts:products,
                    filter:action.val
                }
                
            }
        case productConstants.SORT_PRODUCTS:
            const sortedproducts = action.fp.slice();
            if (action.val !== "") {
                sortedproducts.sort((a, b) =>
                  action.val === "lowest"
                    ? a.price > b.price
                      ? 1
                      : -1
                    : a.price < b.price
                    ? 1
                    : -1
                );
                return {
                    ...state,
                    filterredproducts:sortedproducts,
                    sort:action.val
                }
              } else {
                let newproducts= sortedproducts.sort((a, b) => (a.id > b.id ? 1 : -1));
                return {
                    ...state,
                    filterredproducts:newproducts,
                    sort:action.val
                }
               
              }
        default:
            return state
    }
}
