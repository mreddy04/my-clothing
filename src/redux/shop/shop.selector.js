import { createSelector } from 'reselect';

const shopData = state => state.shop;

export const shopCollection = createSelector(
    [shopData],
    shop => shop.collections
);

export const selectCollection = urlParam => createSelector(
    [shopCollection],
    collections => collections[urlParam]
);


export const selectCollectionForPreview = createSelector(
    [shopCollection],
    collections => Object.keys(collections).map(k => collections[k])
);
