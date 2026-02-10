import React from 'react'

const Pagination = ({ totalPages, cuurentPage, setCurrentPage }) => {
    return (
        <>
            <div className='fixed absolute bottom-0 flex gap-3 items-center justify-center w-full'>
                <button
                    disabled={cuurentPage === 1}
                    onClick={() => setCurrentPage((page) => page - 1)}
                    className='px-3 py-2 rounded-md bg-blue-200'>Prev</button>
                <span>{cuurentPage} to {totalPages}</span>
                <button
                    disabled={cuurentPage === totalPages}
                    onClick={() => setCurrentPage((page) => page + 1)}
                    className={`px-3 py-2 rounded-md bg-blue-200`}>Next</button>
            </div>
        </>
    )
}

export default Pagination