const STORAGE_KEY = "user-recipes";

export const getUserRecipes = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addUserRecipe = (recipe) => {
  const newRecipe = { ...recipe, idMeal: Date.now().toString(), favorite: false };
  const current = getUserRecipes();
  const updated = [...current, newRecipe];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const updateUserRecipe = (updatedRecipe) => {
  const recipes = getUserRecipes().map(r =>
    r.idMeal === updatedRecipe.idMeal ? updatedRecipe : r
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
};

export const deleteUserRecipe = (idMeal) => {
  const filtered = getUserRecipes().filter(r => r.idMeal !== idMeal);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

export const toggleFavorite = (idMeal) => {
  const recipes = getUserRecipes().map(r =>
    r.idMeal === idMeal ? { ...r, favorite: !r.favorite } : r
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
};
