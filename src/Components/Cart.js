import React from 'react'
import { useSelector, } from 'react-redux'
import CartItem from './CartItem';
import './style.css'
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    return (
        <>
            {cart.items.length !== 0 && <div className='w-full h-screen inline-flex text-white px-5' style={{
                height: '89vh'
            }}>
                <div className='w-11/12' style={{
                    paddingLeft: '5%',
                    // height: '50%'
                }}>
                    <p className=' text-2xl m-2'> Cart - {cart.quantity} Items</p>
                    <div className=' rounded-xl  w-10/12 ' style={{
                        border: '1px solid white',
                        overflowY: 'scroll',
                        maxheight: '65%',
                        padding: '2%'
                    }}>
                        {cart.items.map((item, index) => {
                            return (
                                <CartItem item={item} index={index} key={item.id} />
                            )
                        })}
                    </div>
                </div>

                <div className='p-4' style={{
                    width: '30%',
                    marginRight: '2%',
                }}>
                    <div className='rounded-xl px-4 py-5 mt-9' style={{
                        border: '2px solid white'
                    }}>
                        <p className=' font-semibold text-2xl px-10 mt-5 '> Summary</p>
                        <div className="divider"></div>
                        <div className='flex justify-around text-xl my-2'>
                            <p>Products</p>
                            <p>{cart.total} $</p>
                        </div>
                        <div className='flex justify-around text-xl'>
                            <p>Shipping</p>
                            <p>20 $</p>
                        </div>
                        <div className="divider"></div>
                        <div className='flex justify-around text-xl mb-10'>
                            <p className='font-semibold'>Total Amount <br /> (Including Tax)</p>
                            <p className=''>{cart.total + 20} $</p>
                        </div>
                        <div className='text-center my-2'>
                            <button className='btn btn-primary w-1/2'> Go To Checkout</button>
                        </div>
                    </div>
                </div>
            </div >}
            {cart.items.length === 0 && <EmptyCart />}
            <Link to='/products' className=' btn btn-primary text-md' style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px'
            }}> Go to Home</Link>
        </>

    )
}

export default Cart
