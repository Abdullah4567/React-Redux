import React from 'react'
import { useNavigate } from 'react-router'

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button className=' btn btn-primary text-md' onClick={() => navigate('/products')} style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px'
        }}>
            Go to Home
        </button>
    )
}
export default BackButton
