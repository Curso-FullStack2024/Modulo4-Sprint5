import React from 'react';
import { useCards } from '../contexts/CardsContext';

const CardPagination = () => {
  // Obtener el contexto de cartas
  const { totalCards, currentCards, currentPage, totalPages, paginate } = useCards();

  // Ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  // Ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  // Generar números de página para mostrar
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5; // Ajustar según necesidades

    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    // Ajustar startPage si endPage está en el límite
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="w-full">

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 my-8">
          {/* Botón para ir a la primera página */}
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
              }`}
          >
            «
          </button>

          {/* Botón para ir a la página anterior */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
              }`}
          >
            ‹
          </button>

          {/* Números de página */}
          {getPageNumbers().map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-md ${currentPage === number
                  ? 'bg-yellow-700 text-white font-bold'
                  : 'bg-yellow-600 text-white hover:bg-yellow-700'
                }`}
            >
              {number}
            </button>
          ))}

          {/* Botón para ir a la página siguiente */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${currentPage === totalPages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
              }`}
          >
            ›
          </button>

          {/* Botón para ir a la última página */}
          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${currentPage === totalPages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
              }`}
          >
            »
          </button>
        </div>
      )}

      {/* Indicador de página actual */}
      <div className="text-center text-yellow-400">
        Página {currentPage} de {totalPages} | Mostrando {currentCards.length} de {totalCards} cartas
      </div>
    </div>
  );
};

export default CardPagination;