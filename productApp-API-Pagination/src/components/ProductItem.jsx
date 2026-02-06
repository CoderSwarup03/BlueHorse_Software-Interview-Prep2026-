import React from 'react'

const ProductItem = ({ item }) => {
    return (
        <>
            <div className='flex flex-col gap-3 border-2 border-green-500 p-3 rounded-md'>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <span>{item.description.slice(0,35)}</span>
                <div className='flex justify-between items-center gap-3'>
                    <span>{item.stock}</span>
                    <span>{item.price}</span>
                </div>
            </div>
        </>
    )
}

export default ProductItem