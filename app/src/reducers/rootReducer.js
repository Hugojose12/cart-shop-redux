import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { cartReducer } from './cartReducer';
import { itemsReducer } from './itemsReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    cart: cartReducer,
    items: itemsReducer   
})