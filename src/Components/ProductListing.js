import React, { useEffect } from 'react'
import Product from './Product'
import useFetch from '../Hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../Redux/Action-Creators';
import { bindActionCreators } from 'redux';
const ProductListing = () => {
    const dispatch = useDispatch();
    const { products } = useFetch('/products?limit=100');
    const { SetProducts } = bindActionCreators(actionCreators, dispatch);
    const searchedProducts = useSelector(state => state.searchedItems)
    const productsToShow = searchedProducts.length === 0 ? products : searchedProducts
    useEffect(() => {
        if (products) {
            SetProducts(products);
        }
    }, products);

    return (
        <div>
            <div className=' text-white grid grid-cols-4 gap-y-8 my-1 justify-items-center'>
                {(productsToShow || []).map((product, index) => {
                    return (
                        <Product product={product} key={index} />
                    )
                })}
            </div>
        </div >
    )
}


export default ProductListing
