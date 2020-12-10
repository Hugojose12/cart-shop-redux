import { itemsLoaded } from "./items";
import { types } from '../types/types';

export const filterByPrices = (min = 0, max) => {
    return async(dispatch, getState) => {

        const { filter, items } = getState().items;

        if (filter === 0) dispatch( copyArrOriginalItems(items) )

        const arrFilter = ArrOriginal.filter(({ price }) => price >= min && price <= max )

        dispatch( copyArrOriginalItems() )
        dispatch( itemsLoaded(arrFilter))

        console.log("array original final", ArrOriginal)
    }
}

const copyArrOriginalItems = (items) => ({
    type: types.saveOriginalItems,
    payload: itemss
})