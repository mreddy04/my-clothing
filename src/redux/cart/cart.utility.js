export const addCartItem = (cartItems, newItem) => {
    const itemExists = cartItems.find( item => item.id === newItem.id);
    if (itemExists) {
        return cartItems.map(item => {
            return item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
    }
    return [...cartItems, { ...newItem , quantity: 1}]
}


export const clearCartItem = (cartItems, removeItem) => {
    return cartItems.filter((item) => item.id !== removeItem.id);
}

export const removeCartItem = (cartItems, removeItem) => {
    const itemExists = cartItems.find(item => item.id === removeItem.id);
    if (itemExists.quantity === 1) {
        return clearCartItem(cartItems, removeItem);
    }
    return cartItems.map(item => {
        return item.id === removeItem.id ?
            { ...item, quantity: item.quantity - 1 } :
            item;
    });
}
