import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';

const App = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 8;


  const totalPage = Math.ceil(product.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProduct = product.slice(startIndex, startIndex + itemsPerPage);

  // https://dummyjson.com/products
  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProduct(data.products);
  }
  useEffect(() => {
    fetchProduct();
  }, []) 

  return (
    <>
      <ProductList product={currentProduct} />
      <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default App