import React, { useState } from 'react';
import FoodCard from './FoodCard';
import FoodData from '../data/data';
import toast, { Toaster } from 'react-hot-toast';

const FoodItems = () => {
  const itemsPerPage = 6;
  const totalProducts = FoodData.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleToast = (name) => toast.success(`Added ${name}`);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = FoodData.slice(startIndex, endIndex);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-10 justify-center">
        {visibleProducts.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            rating={food.rating}
            img={food.img}
            price={food.price}
            desc={food.desc}
            handleToast={handleToast}
          />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-green-950 disabled:opacity-50"
        >
          ← Prev
        </button>

        <span className="text-white self-center">
          Page {currentPage} of {totalPages}
        </span> 

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-green-950 disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </>
  );
};

export default FoodItems;
