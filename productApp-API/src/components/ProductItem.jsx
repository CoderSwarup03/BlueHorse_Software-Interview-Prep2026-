import React from 'react'

const ProductItem = ({item}) => {
    return (
        <>
            <div className='flex flex-col items-center gap-3 border-2 border-green-500 px-3 py-2 rounded-md'>
                <img src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
                <span>{item.description.slice(0,35)}</span>
            </div>
        </>
    )
}

export default ProductItem