import React, { useState, useEffect } from "react";

const RecipeForm = ({ onSubmit, onCancel, initial }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (initial) {
      setTitle(initial.strMeal || initial.title || "");
      setIngredients(initial.ingredients || "");
      setInstructions(initial.strInstructions || initial.instructions || "");
      setImage(initial.strMealThumb || initial.image || "");
    }
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      idMeal: initial?.idMeal || Date.now().toString(),
      strMeal: title.trim(),
      ingredients: ingredients.trim(),
      strInstructions: instructions.trim(),
      strMealThumb: image.trim(),
      favorite: initial?.favorite || false,
    };
    onSubmit(recipe);
  };

  return (
    <div className="form-overlay" onClick={onCancel}>
      <form
        className="recipe-form"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2>{initial ? "Edit Recipe" : "Add New Recipe"}</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          required
        />
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma separated)"
          required
          rows={3}
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
          required
          rows={5}
        />
        <div className="form-buttons">
          <button type="submit">{initial ? "Update" : "Add"}</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
