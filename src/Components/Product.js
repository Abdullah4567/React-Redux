import React from 'react'
import Ratings from './Ratings'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (

        <Link className="card bg-base-100 shadow-xl glass" to={`/products/${product.id}`}
            style={{
                width: '22rem'
            }}>
            <figure className="rounded-xl" style={{
                objectFit: 'contain',
                height: '25vh'
            }}><img className="" src={product?.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body" style={{
                paddingBottom: '2%'
            }}>
                <h2 className="card-title">{product.title?.length > 20 ? product.title?.split(" ").slice(0, 10).join(' ') + ' ...' : product.title}</h2>
                <p className=''>{product.description?.length > 20 ? product.description?.split(" ").slice(0, 10).join(' ') + ' ...' : product?.description}</p>
                <div className='w-full' style={{
                    display: 'inline-flex'
                }}>
                    <div className='w-1/2'>
                        <Ratings stock={product?.stock} />
                    </div>
                    <div className='w-1/2 text-right'>
                        <p className=" mt-2 mr-2 text-secondary font-bold text-xl"> {product.price} $</p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    {/* <Link className="btn btn-primary" to={`/products/${product.id}`}>Show Details</Link> */}
                </div>
            </div>
        </Link>
    )
}

export default Product
