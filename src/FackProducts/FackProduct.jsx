import React from "react";
import data from './Data.jsx';
import './product.css'

function Fackproduct() {
  const recipes = data[0].recipes;

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Recipe List</h2>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            {/* <p><strong>Difficulty:</strong> {recipe.difficulty}</p> */}
            {/* <p><strong>Rating:</strong> {recipe.rating} ⭐</p> */}
            {/* <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p> */}
            <p><strong>mealType:</strong> {recipe.mealType.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fackproduct;


