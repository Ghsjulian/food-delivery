import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();
const initialstate = {
    cart: []
};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialstate);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart, CartContext };
