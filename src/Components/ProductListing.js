import React, { useEffect, useState } from 'react'
import Product from './Product'
import useFetch from '../Hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../Redux/Action-Creators';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
const ProductListing = () => {
    const dispatch = useDispatch();
    const { products } = useFetch('/products?limit=100');
    const [scrollY, setscrollY] = useState(0)
    const { SetProducts } = bindActionCreators(actionCreators, dispatch);
    const searchedProducts = useSelector(state => state.searchedItems)
    const productsToShow = searchedProducts.length === 0 ? products : searchedProducts
    useEffect(() => {
        if (sessionStorage.getItem('scrollPosition')) {
            window.scrollTo(0, sessionStorage.getItem('scrollPosition'));
        }
        if (products) {
            SetProducts(products);
        }
    }, [products, SetProducts]);

    return (
        <div>
            <div className=' text-white grid grid-cols-4 gap-y-8 my-1 justify-items-center'>
                {(productsToShow || []).map((product, index) => {
                    return (
                        <Link to={`/products/${product.id}`} key={index}
                            onClick={() => sessionStorage.setItem('scrollPosition', window.scrollY)} >
                            <Product product={product} />
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}


export default ProductListing
