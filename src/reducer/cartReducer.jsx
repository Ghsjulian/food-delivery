const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const { product } = action.payload;
    //        console.log(product);
            return { ...state, cart: [...state.cart, product] };
        case "REMOVE_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    item => item.product_id !== action.payload
                )
            };
        default:
            throw new Error();
    }
    return state;
};
export { cartReducer };
