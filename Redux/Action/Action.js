import {
    ADD_DATA,
    ADD_BASKET,
    REMOVE_BASKET,
    MIN_PRICE,
    MAX_PRICE
} from './ActionType'

export const addData = (data) => {
    return {
        type: ADD_DATA,
        payload : data
    }
}




export const removeBasket = (data) => {
    return {
        type: REMOVE_BASKET,
        payload : data
    }
}


export const setMinPrice = (data) => {
    return {
        type: MIN_PRICE,
        payload : data
    }
}
export const setMaxPrice = (data) => {
    return {
        type: MAX_PRICE,
        payload : data
    }
}






