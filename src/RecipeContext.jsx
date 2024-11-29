import React, { createContext, useState, useContext } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    const updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (recipeUri) => {
    const updatedFavorites = favorites.filter(recipe => recipe.uri !== recipeUri);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe, favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
