import React from 'react'

const Carousel = ({ images }) => {
    return (
        <div className="carousel w-full mb-20 rounded-xl" style={{
            height: '50vh',
            width: '50vh'
        }}>
            {
                (images || []).map((image, index, images) => {
                    return (
                        <div id={`slide${index}`} className="carousel-item w-full relative" key={index}>
                            <img src={image} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                                <div>
                                    {index !== 0 && <a href={`#slide${index == 0 ? index : index - 1}`}
                                        className="btn btn-circle">❮</a>}
                                </div>
                                <div>

                                    {index !== images.length - 1 && <a href={`#slide${index == (images.length
                                        - 1) ? index : index + 1}`}
                                        className="btn btn-circle">❯</a>}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Carousel
