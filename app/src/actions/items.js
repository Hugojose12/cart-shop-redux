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

export const itemCleanerActive = () => ({ type: types.itemCleanerActive });

export const startAddItemToCart = (quantity, item) => {
    return async(dispatch, getState) => {

        const { inCart } = getState().cart;
        let productAlreadyInCart = false;

        inCart.forEach(cp => {
            if (cp.id === item.id) {
              productAlreadyInCart = true;
            }
        });

        if(!productAlreadyInCart) { 
            
            const newItem = {
                ...item,
                quantity
            }
            
            const resp = await new Promise((res, rej) =>{
                setTimeout(() => res(newItem), 500);
            })
            .then((resp) => {
                dispatch(addItemToCart(resp))
    
                notification.success({
                    message: `${resp.title} (${resp.quantity})`,
                    description:
                    `This article is already in your shopping cart. If you don't want them all, edit your Cart.`,
                    placement: 'bottomLeft'
                });
            }).catch((error) => {
                notification.error({
                    message: `${resp.title}`,
                    description: 'Your item could not be added to the cart',
                    placement: 'bottomLeft'
                });
            }).finally(() => {
                dispatch( finishLoadingModal() )
                dispatch( CloseModal() )                        
                dispatch( itemCleanerActive() )
            })

        } else {
            dispatch( startCartUpdate(quantity, item) )
        }    
    }
}

export const deletedItemFromCart = (itemId) => {
    return async(dispatch) => {
        await new Promise((res, rej) =>{
            setTimeout(() => res(itemId), 1000);
        })
        .then((res) => {
            dispatch(deletedItemInCart(res))

            notification.success({
                description:
                `The item has been removed from the shopping cart.`,
                placement: 'bottomLeft'
            });
        })
        .catch((error) => {
            notification.error({
                message: `${error.message}`,
                description:
                    'Your item could not be deleted in the cart',
                placement: 'bottomLeft'
            })
        })
        .finally(() => {
            dispatch( finishLoadingModal() )
        })
    }
}

export const itemsLoaded = (items) => ({
    type: types.itemsLoaded,
    payload: items
})

const startCartUpdate = (quantity, item) => {
    return async(dispatch, getState) => {

        const { inCart } = getState().cart

        const updateItem = {
            ...item
        }

        inCart.find(cp => {
            if (cp.id === updateItem.id) {
                updateItem.quantity = cp.quantity + quantity
            }

            return null
        });

        const resp = await new Promise((res, rej) =>{
            setTimeout(() => res(updateItem), 500);
        })
        .then((resp) => {
            dispatch(updateItemInCart(resp))

            notification.success({
                message: `${resp.title} (${resp.quantity})`,
                description:
                `This item was already in your Cart. If you don't want all of them, edit your Cart.`,
                placement: 'bottomLeft'
            });
        }).catch((error) => {
            notification.error({
                message: `${error.message}`,
                description:
                    'Your item could not be updated in the cart',
                placement: 'bottomLeft'
            });
        }).finally(() => {
            dispatch( finishLoadingModal() )
            dispatch( CloseModal() )
            dispatch( itemCleanerActive() )
        })
    }   
}

const addItemToCart = (item) => ({
    type: types.itemToCart,
    payload: {
        ...item
    }
})

const updateItemInCart = (item) => ({
    type: types.updateItemInCart,
    payload: {
        ...item
    }
})

const deletedItemInCart = (itemId) => ({
    type: types.removeItemCart,
    payload: itemId 
})