import { Actions } from "../ActionTypes"

export const AddSearchedItem = (products) => {
    return (dispatch => {
        dispatch({
            type: Actions.ADD_SEARCHED_ITEMS,
            payload: {
                products
            }
        })
    })
}