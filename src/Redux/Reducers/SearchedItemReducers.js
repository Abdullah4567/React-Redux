import React from 'react'
import initialState from '../initialState'
import { Actions } from '../ActionTypes'

const SearchedItemReducers = (state = initialState.searchedItems, action) => {
    switch (action.type) {
        case Actions.ADD_SEARCHED_ITEMS:
            const { products } = action.payload
            return [...products]
        default:
            return state
    }
}

export default SearchedItemReducers;
