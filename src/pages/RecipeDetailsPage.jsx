import React, { useEffect, useState } from 'react';
import { useRecipe } from '../RecipeContext'; // Adjust the path if necessary
import RecipeCard from '../components/RecipeCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RecipeDetailsPage.css';

const RecipeDetailsPage = () => {
  const { selectedRecipe, favorites, addToFavorites, removeFromFavorites } = useRecipe();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if selected recipe is in favorites
    if (selectedRecipe) {
      const isRecipeFavorite = favorites.some(recipe => recipe.uri === selectedRecipe.uri);
      setIsFavorite(isRecipeFavorite);
    }
  }, [selectedRecipe, favorites]);

  const handleToggleFavorites = () => {
    if (selectedRecipe) {
      if (isFavorite) {
        // Remove recipe from favorites
        removeFromFavorites(selectedRecipe.uri);
        toast.info('Removed from favorites');
      } else {
        // Add recipe to favorites
        addToFavorites(selectedRecipe);
        toast.success('Added to favorites');
      }
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <div className="recipe-details-page">
      <ToastContainer />
      {selectedRecipe ? (
        <div>
          <RecipeCard recipe={selectedRecipe} />
          <button onClick={handleToggleFavorites}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ) : (
        <div>No recipe selected</div>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
