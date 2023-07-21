import { Actions } from "../ActionTypes";
import initialState from "../initialState";
const ProductReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case Actions.SET_PRODUCTS:
            const { products } = action.payload;
            return [...products]
        default: return state;
    }

}
export default ProductReducer;