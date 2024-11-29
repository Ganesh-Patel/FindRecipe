import React from 'react';
import RecipeCard from './RecipeCard';
import ListCard from './ListCard';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((item, index) => (
          <ListCard key={index} recipe={item.recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
