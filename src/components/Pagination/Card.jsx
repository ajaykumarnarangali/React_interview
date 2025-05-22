import React from 'react'

function Card({ product }) {
    return (
        <div className="max-w-sm bg-white rounded shadow-md overflow-hidden p-2">
            <img
                className="w-full h-48 object-cover"
                src={product?.thumbnail}
                alt="Product Image"
            />
            <div className="p-4">
                <h2 className="text-lg text-center font-semibold text-gray-800">{product?.title}</h2>
            </div>
        </div>

    )
}

export default Card