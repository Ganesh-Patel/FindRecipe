import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../RecipeContext'; // Adjust the path if necessary
import './ListCard.css'
const ListCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipe();

  const handleClick = () => {
    setSelectedRecipe(recipe);
    navigate('/recipe'); // Navigate to RecipeDetailsPage
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      {console.log("recipe:", recipe)}
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>{recipe.source}</p>
    </div>
  );
};

export default ListCard;
