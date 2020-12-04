import { types } from '../types/types';

const initialState = {
    items: [],
    active: null
};


export const itemsReducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.itemsLoaded:
            return {
                ...state,
                items: [ ...action.payload ]
            }
        case types.itemActive: 
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.itemCleanerActive:
            return {
                ...state,
                active: null
            }
        default:
            return state
    }
}
