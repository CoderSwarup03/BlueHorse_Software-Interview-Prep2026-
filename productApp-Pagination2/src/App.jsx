import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Menu from './pages/Menu'

const App = () => {
  const [product, setProduct] = useState([]);
  const [cuurentPage, setCurrentPage] = useState(1);

  const itemPerPage = 10;

  const startIndex = (cuurentPage - 1) * itemPerPage;
  const totalPages = Math.ceil(product.length / itemPerPage);
  const cuurentProduct = product.slice(startIndex, startIndex + itemPerPage);

  //https://dummyjson.com/products
  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProduct(data.products);
    console.log(data.products);
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home product={cuurentProduct} totalPages={totalPages} cuurentPage={cuurentPage} setCurrentPage={setCurrentPage} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App