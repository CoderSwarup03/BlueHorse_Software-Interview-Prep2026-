import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ product }) {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {product.length === 0 ? (
                    <h3>Product is empty</h3>
                ) : (
                    product.map((item) => {
                        return (
                            <ProductItem key={item.id} item={item} />
                        )
                    })
                )}
            </div>

        </>
    )
}

export default ProductList