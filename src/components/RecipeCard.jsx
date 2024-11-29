import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../RecipeContext'; // Adjust the path if necessary
import './RecipeCard.css';
const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipe();

  const handleClick = () => {
    setSelectedRecipe(recipe);
    navigate('/recipe'); // Navigate to RecipeDetailsPage
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <div className="card">
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>Source: {recipe.source}</p>
      <p>Yield: {recipe.yield} servings</p>
      <p>Calories: {Math.round(recipe.calories)} kcal</p>
      <p>Diet Labels: {recipe.dietLabels.join(', ')}</p>
      <p>Health Labels: {recipe.healthLabels.join(', ')}</p>
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
