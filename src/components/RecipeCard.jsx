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
        <div className="image-container">
          <img src={recipe.image} alt={recipe.label} className="recipe-image" />
          <div className="image-overlay">
            <h3>{recipe.label}</h3>
          </div>
        </div>
        <div className="recipe-info">
          <p><strong>Source:</strong> {recipe.source}</p>
          <p><strong>Yield:</strong> {recipe.yield} servings</p>
          <p><strong>Calories:</strong> {Math.round(recipe.calories)} kcal</p>
          <p><strong>Diet Labels:</strong> {recipe.dietLabels.join(', ')}</p>
          <p><strong>Health Labels:</strong> {recipe.healthLabels.join(', ')}</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
