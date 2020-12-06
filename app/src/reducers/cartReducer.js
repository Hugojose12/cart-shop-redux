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
        default:
            return state
    }
}

