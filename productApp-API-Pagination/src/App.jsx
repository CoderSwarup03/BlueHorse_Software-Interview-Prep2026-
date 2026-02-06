import React, { use, useEffect, useState } from 'react'
import ProductInput from './components/ProductInput'
import ProductList from './components/ProductList'
import Pagination from './components/Pagination'

const App = () => {
  const [product, setProduct] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const startIndex = (currentPage - 1) * itemPerPage;
  const totalPages = Math.ceil(product.length / itemPerPage);
  const currentProduct = product.slice(startIndex, startIndex + itemPerPage);

  // https://dummyjson.com/products 

  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data.products)
    setProduct(data.products)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      <ProductInput setProduct={setProduct}/>
      <ProductList product={currentProduct}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default App