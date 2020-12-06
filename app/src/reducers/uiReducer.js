import { types } from '../types/types';

const initialState = {
    loading: false,
    loadingModal: false,
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
        case types.uiStartLoadingModal:
            return {
                ...state,
                loadingModal: true
            }
    
        case types.uiFinishLoadingModal:
            return {
                ...state,
                loadingModal: false
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