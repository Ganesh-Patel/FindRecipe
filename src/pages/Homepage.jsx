import React, { useState } from 'react';
import RecipeSearch from '../components/RecipeSearch';
import RecipeList from '../components/RecipeList';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const fetchedRecipes = await searchRecipes(query);
      setRecipes(fetchedRecipes);
      setError('');
    } catch (err) {
      setError(err.message);
      setRecipes([]);
    }
  };

  const searchRecipes = async (query) => {
    const appId = '16b388c2'; // Replace with your App ID
    const appKey = '344ac070125400b4ee6b0bd082bfd593';
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch recipes');
    }
    return data.hits;
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Find Your Perfect Recipe</h1>
        <p>Explore healthy and delicious recipes tailored to your preferences</p>
        <RecipeSearch query={query} setQuery={setQuery} handleSearch={handleSearch} />
      </div>
      {error && <div className="error">{error}</div>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
