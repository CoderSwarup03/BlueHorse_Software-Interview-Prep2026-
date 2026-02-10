import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-green-500 p-4 sticky top-0'>
                <div className='max-w-[85%] mx-auto flex justify-between items-center'>
                    <h3 className='text-xl font-bold'>Store</h3>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-3'>
                            <input type="search" placeholder='Search' className='px-3 py-2 outline-none bg-white border-2 border-green-500 rounded-md' />
                            <button className='px-3 py-2 rounded-md bg-blue-500 cursor-pointer text-white font-semibold'>Search</button>
                        </div>
                        <div>
                            <ul className='flex items-center gap-3'>
                                <Link to={'/'}>Home</Link>
                                <Link to={'/cart'}>Cart</Link>
                                <Link to={'/menu'}>Menu</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar