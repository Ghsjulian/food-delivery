import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_PRODUCT":
          //  console.log(action.data);
            return {
                ...state,
                data: state.data.filter(
                    product => product_id !== action.payload
                )
            };
        default:
            return state;
    }
};

export { reducer };

/*   How To Use   */
/*
const initialState = {
    data: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" }
        // ... add more products here
    ]
};
const [state, dispatch] = useReducer(reducer, initialState);
    const handleRemoveProduct = productId => {
        dispatch({ type: "REMOVE_PRODUCT", payload: productId });
    };
    */
