import { types } from '../types/types';

const initialState = {
    inCart: []
};


export const cartReducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.itemToCart:
            return {
                ...state,
                inCart: [action.payload, ...state.inCart]
            }
        case types.updateItemToCart:
            return {
                ...state,
                inCart: state.inCart.map(
                    item => item.id === action.payload.id
                    ? action.payload
                    : item
                )
            }

            
        default:
            return state
    }
}

