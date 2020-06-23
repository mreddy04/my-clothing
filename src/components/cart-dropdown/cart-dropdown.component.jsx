import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component';
import { cartItemsSelector } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? (cartItems.map(item => {
                    return (<CartItem key={item.id} item={item} />)
                })
            ) : (
                <span className="empty-items">No items in the cart</span>
            )
        }
        </div>
        <CustomButton onClick={() =>  {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }
        }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
