import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h3>{recipe.recipe.label}</h3>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <p>Calories: {Math.round(recipe.recipe.calories)}</p>
          <p>Source: {recipe.recipe.source}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
