import { types } from "../types/types";
import { finishLoading } from "./ui";

export const itemsStartLoading = () => {
    return async(dispatch) => {
        try {
            const resp = await fetch('https://fakestoreapi.com/products')
            const items = await resp.json();

            //console.log(items)
            dispatch( itemsLoaded(items))
            dispatch( finishLoading() )
        } catch (error) {
            console.log(error)
        }
    }
}

export const itemActive = (id, item) => ({
    type: types.itemActive,
    payload: {
        id,
        ...item
    }
})

const itemsLoaded = (items) => ({
    type: types.itemsLoaded,
    payload: items
})

export const itemCleanerActive = () => ({ type: types.itemCleanerActive });