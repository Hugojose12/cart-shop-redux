import { types } from '../types/types';

const initialState = {
    items: [],
    active: null,
    copyItems: []
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
        case types.saveOriginalItems:
            return {
                ...state,
                copyItems: [ ...action.payload ]
            }   
        default:
            return state
    }
}
