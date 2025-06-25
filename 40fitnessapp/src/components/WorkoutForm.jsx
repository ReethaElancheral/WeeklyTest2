import React, { useState, useEffect } from "react";

const WorkoutForm = ({ onAdd, onUpdate, editingWorkout, onCancel }) => {
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  useEffect(() => {
    if (editingWorkout) {
      setDate(editingWorkout.date);
      setExercise(editingWorkout.exercise);
      setDuration(editingWorkout.duration);
      setCalories(editingWorkout.calories);
    } else {
      setDate("");
      setExercise("");
      setDuration("");
      setCalories("");
    }
  }, [editingWorkout]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !exercise || !duration || !calories) {
      alert("Please fill in all fields");
      return;
    }
    const workout = {
      id: editingWorkout ? editingWorkout.id : Date.now().toString(),
      date,
      exercise,
      duration: Number(duration),
      calories: Number(calories),
    };
    if (editingWorkout) {
      onUpdate(workout);
    } else {
      onAdd(workout);
    }
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h2>{editingWorkout ? "Edit Workout" : "Add Workout"}</h2>

      <label>
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <label>
        Exercise
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="e.g. Running"
          required
        />
      </label>

      <label>
        Duration (minutes)
        <input
          type="number"
          min="1"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>

      <label>
        Calories Burned
        <input
          type="number"
          min="1"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
      </label>

      <div className="form-buttons">
        <button type="submit">{editingWorkout ? "Update" : "Add"}</button>
        {editingWorkout && (
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default WorkoutForm;
