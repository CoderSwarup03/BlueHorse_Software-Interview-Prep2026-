import React from 'react'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import ProductList from '../components/ProductList'

const Home = ({ product, totalPages, cuurentPage, setCurrentPage }) => {
    return (
        <>
            <Navbar />
            <ProductList product={product} />
            <Pagination totalPages={totalPages} cuurentPage={cuurentPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}

export default Home