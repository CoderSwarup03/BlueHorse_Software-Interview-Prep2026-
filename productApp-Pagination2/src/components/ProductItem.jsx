import React from 'react'
import { useProduct } from '../context/ProductProvider'

const ProductItem = ({ item }) => {
    const { addToCart } = useProduct();
    return (
        <>
            <div className='flex flex-col gap-3 border-2 border-green-500'>
                <img src={item.thumbnail} alt={item.title.slice(0, 15)} />
                <div className='p-3 h-[18vh]'>
                    <h3 className='text-2xl font-bold'>{item.title}</h3>
                    <p>{item.description.slice(0, 30)}</p>
                    <h4 className='text-2xl font-bold'>${item.price}</h4>
                </div>
                <button
                    onClick={() => addToCart({
                        id: item.id,
                        title: item.title,
                        thumbnail: item.thumbnail,
                        description: item.description,
                        price: item.price,
                        quantity: 1
                    })}
                    className='bg-green-500 text-white px-3 py-2 rounded-md cursor-pointer'>Add Item</button>
            </div>
        </>
    )
}

export default ProductItem