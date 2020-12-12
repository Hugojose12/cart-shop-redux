//import { types } from "../types/types";
import { finishLoading } from "./ui";
import { itemsLoaded } from "./items";

export const sortItemsBy = (sort) => {
    return async(dispatch, getState) => {

        const { items } = getState().items;
        
        const copyItems = JSON.parse( JSON.stringify( items ) );

        if (sort === "Lowest to highest") {
            copyItems.sort( (a, b) => a.price > b.price ? 1 : -1)
        } else if (sort === "Highest to lowest") {
            copyItems.sort( (a, b) => a.price < b.price ? 1 : -1)
        } else {
            copyItems.sort( (a, b) => a.id > b.id ? 1 : -1)
        }

        dispatch( itemsLoaded(copyItems))
        dispatch( finishLoading() )
    }
}