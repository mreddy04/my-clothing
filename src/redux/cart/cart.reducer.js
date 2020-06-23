import cartActionTypes from './cart.types';
import {
    addCartItem,
    clearCartItem,
    removeCartItem
} from './cart.utility';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.CART_TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM: 
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearCartItem(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
