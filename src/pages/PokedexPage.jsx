import { useState, useEffect } from 'react';
import { getPokemons } from '../services/api';
import { Link } from 'react-router-dom';

function PokedexPage() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 18;

  useEffect(() => {
    fetchPokemons();
  }, [currentPage]);

  async function fetchPokemons() {
    const offset = (currentPage - 1) * limit;
    const data = await getPokemons(limit, offset);
    setPokemons(data.results);
    setTotalPages(Math.ceil(data.count / limit)); // Get the total number of pages
  }

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <div className="cards">
        {pokemons.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name} className="card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
          </Link>
        ))}
      </div>

      {/* Pagination below */}
      <div className="pagination">
        <button
          className="prev-next"
          onClick={handlePreviousPage}
          disabled={currentPage === 1} // Disable if on the first page
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          className="prev-next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages} // Disable if on the last page
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokedexPage;
