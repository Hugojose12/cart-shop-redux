import { types } from '../types/types';

const initialState = {
    loading: false,
    modalOpen: false,
    msgError: null
}


export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
 
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        case types.uiOpenModal:
                return {
                    ...state,
                    modalOpen: true
                }
    
        case types.uiCloseModal:
                return {
                    ...state,
                    modalOpen: false
                }

        default:
            return state;
    }

}