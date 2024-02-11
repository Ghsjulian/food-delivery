import { createContext, useEffect, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const getLocalStorage = () => {
    let data = localStorage.getItem("cartList");
    if (data === "null"||[]) {
        return [];
    } else {
        return JSON.parse(data);
    }
};

const CartContext = createContext();
const initialstate = {
    cart: getLocalStorage()
};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialstate);
    useEffect(() => {
        localStorage.setItem("cartList", JSON.stringify(state.cart));
    }, [state.cart]);
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
