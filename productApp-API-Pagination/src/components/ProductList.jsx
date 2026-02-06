import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({product}) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-5'>
        {product.length === 0 ? (
          <h3>Loading...</h3>
        ):(
          product.map((item) => {
            return (
              <ProductItem key={item.id} item={item}/>
            )
          })
        )}
      </div>
    </>
  )
}

export default ProductList