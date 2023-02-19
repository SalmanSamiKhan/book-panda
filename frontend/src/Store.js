import { createContext, useReducer } from "react";

export const Store = createContext()

const initialState = {
    cart:{
        cartItems: []
    }
}

const ACTIONS = {
    ADD: 'CART_ADD_ITEM'
}

const reducer = (state,action)=>{
    switch(action.type){
        case ACTIONS.ADD:
            // requested item coming from payload
            const reqItem = action.payload
            // if requested item is already in cart.items check by matching id
            const existItem = state.cart.cartItems.find((item)=>item._id===reqItem._id)
            const cartItems = existItem // if requested item is already in cart.items
            ? state.cart.cartItems.map((item)=> // then iterate over cartItems array
            item._id===existItem._id? reqItem: item) // if already in array put it in cartItem variable
            : [...state.cart.cartItems, reqItem] // reqItem is new item. so directly add to cartitems
            return {...state, cart:{...state.cart, cartItems}} // at last return the updated cartItems array
        default:
            return state
    }
}

export function StoreProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state,dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}