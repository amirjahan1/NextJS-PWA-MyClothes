import React from 'react'
import {
    ADD_DATA,
    ADD_BASKET,
    INCREASE_QTY,
    DECREASE_QTY,
    REMOVE_BASKET,
    MIN_PRICE,
    MAX_PRICE,
} from '../Action/ActionType'

const initialState =({
    ProductItem : [],
    BasketBuy : [],
    minPrice : 0,
    maxPrice : 0,
})

const Reducer=(state = initialState ,action)=>{
    switch (action.type) {
        case ADD_DATA: return { ...state , ProductItem : action.payload}

        case ADD_BASKET:  return {...state , BasketBuy: state.BasketBuy.some(item => item.id === action.payload.id)
                ?
                state.BasketBuy.map((item)=>{
                    if(item.id === action.payload.id){
                        item.qty += 1
                        item.totalPrice = item.qty * item.price
                    }
                    return item
                })

        :
            [...state.BasketBuy , action.payload]}




        case DECREASE_QTY : return {...state , BasketBuy: state.BasketBuy.map((item)=>{
            if(item.id === action.payload.id){
                item.qty -= 1
                item.totalPrice = item.qty * item.price
            }
            return item
        })}

        case INCREASE_QTY : return {...state , BasketBuy: state.BasketBuy.map((item)=>{
            if(item.id === action.payload.id){
                item.qty += 1
                item.totalPrice = item.qty * item.price
            }
            return item
        })}

        case REMOVE_BASKET: return { ...state, BasketBuy : state.BasketBuy.filter(item => item.id !== action.payload) }

        case MIN_PRICE: return {  minPrice : action.payload }

        case MAX_PRICE: return {  maxPrice : action.payload }

        default: return initialState
    }
}
export default Reducer