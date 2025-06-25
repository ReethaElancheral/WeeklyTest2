
import './App.css'

import React, { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Stats from "./components/Stats";
import { getWorkouts, saveWorkouts } from "./utils/localStorage";

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);

  useEffect(() => {
    setWorkouts(getWorkouts());
  }, []);

  const addWorkout = (workout) => {
    const updated = [...workouts, { ...workout, id: Date.now().toString() }];
    setWorkouts(updated);
    saveWorkouts(updated);
  };

  const updateWorkout = (updatedWorkout) => {
    const updated = workouts.map((w) =>
      w.id === updatedWorkout.id ? updatedWorkout : w
    );
    setWorkouts(updated);
    saveWorkouts(updated);
    setEditingWorkout(null);
  };

  const deleteWorkout = (id) => {
    const updated = workouts.filter((w) => w.id !== id);
    setWorkouts(updated);
    saveWorkouts(updated);
  };

  const startEdit = (workout) => {
    setEditingWorkout(workout);
  };

  const cancelEdit = () => {
    setEditingWorkout(null);
  };

  return (
    <div className="app">
      <h1>🏋️ Fitness Tracker</h1>

      <WorkoutForm
        onAdd={addWorkout}
        onUpdate={updateWorkout}
        editingWorkout={editingWorkout}
        onCancel={cancelEdit}
      />

      <Stats workouts={workouts} />

      <WorkoutList
        workouts={workouts}
        onDelete={deleteWorkout}
        onEdit={startEdit}
      />
    </div>
  );
};

export default App;

