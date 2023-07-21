import { Actions } from "../ActionTypes"
export const addToCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: Actions.ADD_TO_CART,
            payload: {
                product
            }
        })
    }
}

export const removeFromCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: Actions.REMOVE_FROM_CART,
            payload: {
                product
            }
        })
    }
}
export const removeAllQuantity = (id) => {
    return (dispatch) => {
        dispatch({
            type: Actions.REMOVE_ALL_QUANTITY,
            payload: {
                id
            }
        })
    }
}