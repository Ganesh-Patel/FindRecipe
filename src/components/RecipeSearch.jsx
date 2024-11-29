import React from 'react';
import './RecipeSearch.css';
const RecipeSearch = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="recipe-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RecipeSearch;
