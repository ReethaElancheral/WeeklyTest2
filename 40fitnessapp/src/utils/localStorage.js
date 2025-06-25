const STORAGE_KEY = "fitness-workouts";

export const getWorkouts = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveWorkouts = (workouts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
};
