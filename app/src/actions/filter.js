import { itemsLoaded } from "./items";
import { types } from '../types/types';

export const filterByPrices = (min = 0, max) => {
    return async(dispatch, getState) => {

        const { copyItems, items } = getState().items;

        let arrFilter = [];

        if (copyItems.length === 0) {
            arrFilter = items.filter(({ price }) => price >= min && price <= max )
            dispatch( copyArrOriginalItems(items) )
        } else {
            arrFilter = copyItems.filter(({ price }) => price >= min && price <= max )
        }

        dispatch( itemsLoaded(arrFilter))
    }
}

const copyArrOriginalItems = (items) => ({
    type: types.saveOriginalItems,
    payload: items
})