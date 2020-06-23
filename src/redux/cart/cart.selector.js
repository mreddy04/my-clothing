import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const cartItemsSelector = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const cartHiddenSelector = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    (cartItems) => {
        return cartItems.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
    }
);

export const cartItemsTotalSelector = createSelector(
    [cartItemsSelector],
    (cartItems) => {
        return cartItems.reduce((acc, item) => {
            return acc + item.quantity * item.price;
        }, 0);
    }
);
