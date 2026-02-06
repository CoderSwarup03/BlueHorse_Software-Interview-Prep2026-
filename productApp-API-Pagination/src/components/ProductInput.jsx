import React, { useState } from 'react'

const ProductInput = ({setProduct}) => {
    const [searchInput,setSearchInput] = useState('');

    const handleSearch = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`);
        const data = await response.json();
        console.log(data.products)
        setProduct(data.products)
    }

    return (
        <>
            <div className='bg-green-500 py-2 sticky top-0'>
                <div className='max-w-[85%] mx-auto flex justify-between items-center '>
                    <h3 className='text-2xl font-bold'>Store All In 1</h3>
                    <div className='flex gap-3'>
                        <input 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="search" placeholder='Search product here...' className='px-3 py-2 rounded-md outline-none bg-white'/>
                        <button 
                        onClick={() => handleSearch()}
                        className='px-3 py-2 rounded-md bg-blue-500 text-white cursor-pointer'>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInput