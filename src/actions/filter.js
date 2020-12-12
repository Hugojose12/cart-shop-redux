import { itemsLoaded } from "./items";
import { types } from '../types/types';

export const filterByPrices = (min, max) => {
    return async(dispatch, getState) => {

        const { copyItems, items } = getState().items;

        let arrFilter = [];

        if( min=== -1 && max === -1 ) {
            min = 0
            max = 99999
        }

        if (copyItems.length === 0) {
            arrFilter = items.filter(({ price }) => price >= min && price <= max )
            dispatch( copyArrOriginalItems(items) )
        } else {
            arrFilter = copyItems.filter(({ price }) => price >= min && price <= max )
        }

        dispatch( itemsLoaded(arrFilter))
    }
}

export const filterByCategories = (argcategory) => {
    return async(dispatch, getState) => {

        const { copyItems, items } = getState().items;

        let arrFilter = [];

        if (copyItems.length === 0) {
            arrFilter = items.filter(({ category }) => category === argcategory)
            dispatch( copyArrOriginalItems(items) )
        } else if (argcategory === "all") {
            arrFilter = copyItems
        } else {
            arrFilter = copyItems.filter(({ category }) => category === argcategory)
        }

        dispatch( itemsLoaded(arrFilter))
    }
}

const copyArrOriginalItems = (items) => ({
    type: types.saveOriginalItems,
    payload: items
})