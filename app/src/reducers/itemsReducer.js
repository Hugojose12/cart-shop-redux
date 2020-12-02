import { types } from '../types/types';

const initialState = {
    items: []
};


export const itemsReducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.itemsLoaded:
            return {
                ...state,
                items: [ ...action.payload ]
            }
        default:
            return state
    }
}
