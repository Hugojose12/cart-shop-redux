 
import { types } from '../types/types';

export const startLoading = () => ({type: types.uiStartLoading})
export const finishLoading = () => ({type: types.uiFinishLoading})

export const OpenModal = () => ({ type: types.uiOpenModal });
export const CloseModal = () => ({ type: types.uiCloseModal });