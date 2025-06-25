import React from "react";

const RecipeDetails = ({
  recipe,
  onClose,
  onEdit,
  onDelete,
  onToggleFavorite,
  isUserRecipe,
}) => {
  if (!recipe) return null;

 
  console.log("RecipeDetails recipe:", recipe);


  const ingredients = isUserRecipe
    ? (recipe.ingredients
        ? recipe.ingredients.split(",").map((i) => i.trim())
        : [])
    : [...Array(20)]
        .map((_, i) => {
          const ing = recipe[`strIngredient${i + 1}`];
          const meas = recipe[`strMeasure${i + 1}`];
          return ing && ing.trim()
            ? `${meas ? meas.trim() : ""} ${ing.trim()}`.trim()
            : null;
        })
        .filter(Boolean);

  const instructions =
    recipe.strInstructions || recipe.instructions || "No instructions provided.";

  return (
    <div className="details-overlay" onClick={onClose}>
      <div className="details" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>{recipe.strMeal || recipe.title}</h2>

        <img
          src={recipe.strMealThumb || recipe.image || ""}
          alt={recipe.strMeal || recipe.title}
        />

        {recipe.strCategory && (
          <p>
            <strong>Category:</strong> {recipe.strCategory}
          </p>
        )}
        {recipe.strArea && (
          <p>
            <strong>Area:</strong> {recipe.strArea}
          </p>
        )}

        <h3>Ingredients:</h3>
        <ul>
          {ingredients.length > 0 ? (
            ingredients.map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>No ingredients listed.</li>
          )}
        </ul>

        <h3>Instructions:</h3>
        <p>{instructions}</p>

        {isUserRecipe && (
          <div className="actions">
            <button onClick={onEdit}>✏️ Edit</button>
            <button onClick={onDelete}>🗑 Delete</button>
            <button onClick={onToggleFavorite}>
              {recipe.favorite ? "⭐ Unfavorite" : "☆ Favorite"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
