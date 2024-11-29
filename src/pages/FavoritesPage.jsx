import React from "react";
import { useRecipe } from "../RecipeContext"; // Adjust the path if necessary
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useRecipe();

  const handleRemoveFromFavorites = (recipeUri) => {
    if (removeFromFavorites) {
      removeFromFavorites(recipeUri);
    }
  };

  // Conditional rendering to handle empty favorites
  const renderFavorites = () => {
    if (!favorites || favorites.length === 0) {
      return (
        <div className="no-favorites">
          <p>No favorites added yet.</p>
        </div>
      );
    }

    return (
      <div className="favorites-page">
        {favorites.map((recipe) => (
          <div key={recipe.uri} className="recipe-card">
            <h3>{recipe.label}</h3>
            <img src={recipe.image} alt={recipe.label} />
            <p>{recipe.source}</p>
            <button onClick={() => handleRemoveFromFavorites(recipe.uri)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    );
  };

  return <div className="favorites-container">{renderFavorites()}</div>;
};

export default FavoritesPage;
