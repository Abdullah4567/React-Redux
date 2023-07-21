import React from 'react'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from 'react-icons/md'


const EmptyCart = () => {
    const style = {
        fontSize: '10rem',
        color: 'green',
        cursor: 'pointer'
    }
    return (
        <Link to='/products'>
            <div className='flex justify-center items-center mt-48 '>
                <MdAddShoppingCart className='hover:p-2' style={style} />
            </div>
            <p className='w-full text-center mt-2 text-2xl text-slate-200'>Empty Cart. Add Something</p>
        </Link>

    )
}

export default EmptyCart
