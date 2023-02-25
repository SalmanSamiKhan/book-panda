import { createContext, useReducer } from "react";

export const Store = createContext()

const initialState = {
    // check if there is any logged in user or not
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    cart: {
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: localStorage.getItem('paymentMethod')
            ? localStorage.getItem('paymentMethod')
            : '',
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    }
}

const ACTIONS = {
    ADD: 'CART_ADD_ITEM',
    REMOVE: 'CART_REMOVE_ITEM',
    SIGNUP: 'USER_SIGNUP',
    LOGIN: 'USER_LOGIN',
    LOGOUT: 'USER_LOGOUT',
    SHIPPING: 'SAVE_SHIPPING_DETAILS'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            // requested item coming from payload
            const reqItem = action.payload
            // if requested item is already in cart.items check by matching id
            const existItem = state.cart.cartItems.find(
                (item) => item._id === reqItem._id)
            const cartItems =
                existItem ?// if requested item is already in cart.items
                    state.cart.cartItems.map((item) => // then iterate over cartItems array
                        item._id === existItem._id ? reqItem : item // if already in array put it in cartItem variable
                    )
                    : [...state.cart.cartItems, reqItem] // reqItem is new item. so directly add to cartitems
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            return { ...state, cart: { ...state.cart, cartItems } } // at last return the updated cartItems array
        case ACTIONS.REMOVE: {
            const cartItems = state.cart.cartItems.filter(
                (item) => item._id !== action.payload._id
            )
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            return { ...state, cart: { ...state.cart, cartItems } }
        }
        case ACTIONS.SIGNUP: {
            return { ...state, userInfo: action.payload }
        }
        case ACTIONS.LOGIN: {
            return { ...state, userInfo: action.payload }
        }
        case ACTIONS.LOGOUT: {
            return { ...state, userInfo: null, cart:{
                cartItems: [], shippingAddress: {}, paymentMethod:''
            }}
        }
        case ACTIONS.SHIPPING: {
            return { ...state, cart: { ...state.cart, shippingAddress: action.payload } }
        }
        case 'SAVE_PAYMENT_METHOD':
            return{
                ...state,
                cart:{
                    ...state.cart,
                    paymentMethod:action.payload
                }
            }
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}