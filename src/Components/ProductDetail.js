import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../Hooks/useFetch';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CartActionCreators } from '../Redux/Action-Creators';
import Carousel from './Carousel';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useFetch(`/products/${id}`);
    // console.log(product)
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const { addToCart, removeFromCart } = bindActionCreators(CartActionCreators, dispatch);
    // console.log(items);
    const productToFind = items.find((element) => {
        if (element.id == product?.id) return element;
    });

    // style
    const style = {
        paddingRight: '5vh',
        paddingLeft: '5vh',
    }

    // HTML elements
    const addToCartElement = (<button className="btn btn-primary w-1/3 mr-20" onClick={() => {
        addToCart(product);
    }}> Add to Cart</button>)
    const actionButtons = (<div className='flex justify-center items-center mr-20'>
        <button className='btn bg-red-600 mr-4 font-bold text-2xl  text-white
                             hover:bg-white hover:text-black'
            style={style} onClick={() => removeFromCart(product)} > - </button>
        <span className='font-bold text-xl text-white'> {productToFind?.quantity}</span>
        <button className='btn bg-green-600 mr-4 font-bold text-2xl text-white ml-4
                             hover:bg-white hover:text-black' style={style}
            onClick={() => addToCart(product)}> + </button>
    </div>)

    return (
        (product?.id && <>
            <div className='w-full flex'>
                <div className='w-1/2 flex justify-center pt-20'>
                    <Carousel images={product.images} />
                </div>
                <div className='w-2/3 mr-7 '>
                    <h2 className="w-2/3 h-1/4  ml-20 text-yellow-200 text-2xl text-center" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'end',

                    }}> {product.title}</h2>
                    <p className="w-3/2  p-3 text-xl text-slate-200" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}> {product?.description}</p>
                    <div className='flex justify-evenly'>
                        <p className='text-3xl  text-secondary  mr-48'> {product?.price} $</p>
                        <Ratings rating={product?.rating} />
                    </div>
                    <div className="bg-white w-3/2 mr-2 mb-4" style={{
                        height: '1px'
                    }}></div>

                    <div className="flex w-full justify-center">
                        {productToFind?.id ? actionButtons : addToCartElement}
                    </div>
                    <Link to='/products' className=' btn btn-primary text-md' style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px'
                    }}> Go to Home</Link>
                </div>
            </div >
        </>)
    )
}

export default ProductDetail
