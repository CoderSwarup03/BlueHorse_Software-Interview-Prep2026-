import React from 'react'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    return (
        <>
            <div className='fixed bottom-0 left-0 w-full bg-gray-500 flex items-center justify-center gap-4 py-3 '>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className='bg-blue-400 px-3 py-2 rounded-md cursor-pointer text-lg font-bold'>Prev</button>
                <span className='text-xl font-bold'>{currentPage} of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className='bg-blue-400 px-3 py-2 rounded-md cursor-pointer text-lg font-bold'>Next</button>
            </div>
        </>
    )
}

export default Pagination