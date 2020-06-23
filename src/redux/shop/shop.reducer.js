import SHOP_DATA from './shop-page.data';

const shopReducer = (state = SHOP_DATA, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;
