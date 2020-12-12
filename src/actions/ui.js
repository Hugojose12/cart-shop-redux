 
import { types } from '../types/types';

export const startLoading = () => ({type: types.uiStartLoading})
export const finishLoading = () => ({type: types.uiFinishLoading})

export const startLoadingModal = () => ({type: types.uiStartLoadingModal})
export const finishLoadingModal = () => ({type: types.uiFinishLoadingModal})

export const OpenModal = () => ({ type: types.uiOpenModal });
export const CloseModal = () => ({ type: types.uiCloseModal });

export const OpenCart = () => ({ type: types.uiOpenCart });
export const CloseCart = () => ({ type: types.uiCloseCart });