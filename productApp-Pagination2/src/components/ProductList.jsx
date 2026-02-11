import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ product }) => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mt-5'>
                {product.length === 0 ? (
                    <h4>No Product</h4>
                ) : (
                    product.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))
                )}
            </div>
        </>
    )
}

export default ProductList