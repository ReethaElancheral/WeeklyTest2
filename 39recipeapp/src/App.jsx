
import './App.css'

import React, { useEffect, useState } from "react";
import { searchRecipes } from "./api/recipesApi";
import {
  getUserRecipes,
  addUserRecipe,
  updateUserRecipe,
  deleteUserRecipe,
  toggleFavorite,
} from "./utils/localStorage";

import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeForm from "./components/RecipeForm";

const App = () => {
  const [apiRecipes, setApiRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setUserRecipes(getUserRecipes());
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      setApiRecipes([]);
      setSelected(null);
      return;
    }
    const result = await searchRecipes(query);
    setApiRecipes(result);
    setSelected(null);
  };

  const handleAdd = (newRecipe) => {
    addUserRecipe(newRecipe);
    setUserRecipes(getUserRecipes());
    setShowForm(false);
  };

  const handleUpdate = (recipe) => {
    updateUserRecipe(recipe);
    setUserRecipes(getUserRecipes());
    setShowForm(false);
    setSelected(null);
    setEditing(null);
  };

  const handleDelete = (id) => {
    deleteUserRecipe(id);
    setUserRecipes(getUserRecipes());
    setSelected(null);
  };

  const handleFavorite = (id) => {
    toggleFavorite(id);
    setUserRecipes(getUserRecipes());
  };

  const allRecipes = [...userRecipes, ...apiRecipes];

  const handleSelect = (recipe) => {
    setSelected(recipe);
  };

  return (
    <div className="app">
      <h1>🍽️ Delicious Recipe App</h1>
      <SearchBar onSearch={handleSearch} />
      <button
        className="btn-add"
        onClick={() => {
          setShowForm(true);
          setEditing(null);
          setSelected(null);
        }}
      >
        + Add Recipe
      </button>

      <RecipeList recipes={allRecipes} onSelect={handleSelect} />

      {selected && (
        <RecipeDetails
          recipe={selected}
          onClose={() => setSelected(null)}
          onEdit={() => {
            setEditing(selected);
            setShowForm(true);
          }}
          onDelete={() => handleDelete(selected.idMeal)}
          onToggleFavorite={() => handleFavorite(selected.idMeal)}
          isUserRecipe={userRecipes.some((r) => r.idMeal === selected.idMeal)}
        />
      )}

      {showForm && (
        <RecipeForm
          onSubmit={editing ? handleUpdate : handleAdd}
          onCancel={() => setShowForm(false)}
          initial={editing}
        />
      )}
    </div>
  );
};

export default App;
