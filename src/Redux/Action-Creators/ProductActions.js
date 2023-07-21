import { Actions } from "../ActionTypes"
export const SetProducts = (products) => {
    return (dispatch) => {
        dispatch({
            type: Actions.SET_PRODUCTS,
            payload: {
                products
            }
        })
    }
}