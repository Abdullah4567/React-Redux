import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
import CartReducer from "./CartReducers";
import SearchedItemReducers from "./SearchedItemReducers";

const rootReducer = combineReducers({
    products: ProductReducer,
    cart: CartReducer,
    searchedItems: SearchedItemReducers
})

export default rootReducer;