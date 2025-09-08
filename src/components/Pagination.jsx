import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border-2 border-blue-500 text-blue-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 hover:bg-blue-500 hover:text-white"
      >
        Previous
      </button>
      <span className="text-md font-semibold text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border-2 border-blue-500 text-blue-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 hover:bg-blue-500 hover:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;