import React from 'react'

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
    return (
        <>
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className={`px-4 py-2 rounded-md border
          ${currentPage === 1
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                >
                    Prev
                </button>

                <span className="font-semibold">
                    Page {currentPage} of {totalPage}
                </span>

                <button
                    disabled={currentPage === totalPage}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className={`px-4 py-2 rounded-md border
          ${currentPage === totalPage
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Pagination