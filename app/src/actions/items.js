import { types } from "../types/types";
import { finishLoading, finishLoadingModal, CloseModal } from "./ui";
import { notification } from 'antd';

export const itemsStartLoading = () => {
    return async(dispatch) => {
        try {
            const resp = await fetch('https://fakestoreapi.com/products')
            const items = await resp.json();

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


export const startAddItemToCart = (quantity, item) => {
    return async(dispatch) => {

        const newItem = {
            quantity,
            ...item
        }

         const resp = await new Promise((res, rej) =>{
            setTimeout(() => res(newItem), 2000);
        })
        .then((resp) => {
            dispatch(addItemToCart(resp))

            notification['success']({
            message: `${resp.title} (${resp.quantity})`,
            description:
              `This item was already in your Cart. If you don't want all of them, edit your Cart.`,
            });
        }).catch((error) => {
            notification['error']({
            message: `${resp.title}`,
            description:
                'Your item could not be added to the cart',
            });
        }).finally(() => {
            dispatch( finishLoadingModal() )
            dispatch( CloseModal() )
        })
             
    }
}

const addItemToCart = (item) => ({
    type: types.itemToCart,
    payload: {
        ...item
    }
})