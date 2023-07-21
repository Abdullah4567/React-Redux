import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CartActionCreators } from '../Redux/Action-Creators';
import { Link } from 'react-router-dom';

const CartItem = ({ item, index }) => {
    const dispatch = useDispatch();
    const { removeAllQuantity, removeFromCart, addToCart } = bindActionCreators(CartActionCreators, dispatch)
    return (
        <>
            {index !== 0 && <div className="divider"></div>}
            <div className='w-full  p-1 inline-flex gap-x-3'>
                <div className=' w-1/4'>
                    <img className='rounded-xl'
                        style={{
                            minHeight: '150px',
                            objectFit: 'cover'
                        }}
                        src={item.thumbnail} alt="" />
                </div>
                <div className='w-2/6 p-2 text-2xl pt-2 '>
                    <div className='my-2'> {item.title}</div>
                    <div className='my-2  text-yellow-500'>Discount : {item.discountPercentage} %</div>
                    <div className="badge  badge-lg badge-primary  rounded-xl text-lg">{item.brand}
                    </div>
                    <br />

                    <div className="tooltip tooltip-right" data-tip="Remove Item">
                        <MdOutlineDeleteOutline
                            className='ml-2 mt-2 p-1 text-white  
                                rounded-md text-4xl cursor-pointer hover:border-2  hover:bg-red-500'
                            onClick={() => removeAllQuantity(item.id)} />
                    </div>
                </div>
                <div className='w-2/6 pt-5'>
                    <div className='flex justify-center gap-x-4'>
                        <button onClick={() => addToCart(item)}
                            className='btn btn-info text-2xl btn-square hover:border-white border-2 hover:bg-green-500'>+
                        </button>
                        <span className='mt-3 text-2xl'>{item.quantity}</span>
                        <button onClick={() => removeFromCart(item)}
                            className='btn btn-info  text-2xl btn-square
                             hover:border-white border-2 hover:bg-red-500'>-
                        </button>
                    </div>
                    <br />
                    <p className='w-full text-center font-bold text-2xl text-blue-700'> {item.price} $</p>
                </div>

            </div>
            <Link to='/products' className=' btn btn-primary text-md' style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px'
            }}> Go to Home</Link>
        </>
    )
}

export default CartItem
