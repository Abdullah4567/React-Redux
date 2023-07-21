import React from 'react'

const Ratings = ({ stock }) => {
    return (
        <div className="rating rating-lg rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " />
            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " />
            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 " />
            <p className='my-2 ml-3' > ({stock})</p>
        </div>
    )
}

export default Ratings
