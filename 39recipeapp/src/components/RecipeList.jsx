import React from "react";

const RecipeList = ({ recipes, onSelect }) => {
  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <div className="recipe-list">
      {recipes.map((r) => (
        <div
          key={r.idMeal}
          className="recipe-item"
          onClick={() => onSelect(r)}
          title={r.strMeal}
        >
          <img src={r.strMealThumb || r.image || ""} alt={r.strMeal || r.title} />
          <h3>{r.strMeal || r.title}</h3>
          {"favorite" in r && r.favorite && <span className="fav-star">⭐</span>}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
