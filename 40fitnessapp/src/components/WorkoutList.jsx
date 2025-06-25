import React from "react";

const WorkoutList = ({ workouts, onDelete, onEdit }) => {
  if (workouts.length === 0) return <p>No workouts logged yet.</p>;

  return (
    <table className="workout-list">
      <thead>
        <tr>
          <th>Date</th>
          <th>Exercise</th>
          <th>Duration (min)</th>
          <th>Calories</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {workouts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((w) => (
            <tr key={w.id}>
              <td>{w.date}</td>
              <td>{w.exercise}</td>
              <td>{w.duration}</td>
              <td>{w.calories}</td>
              <td>
                <button onClick={() => onEdit(w)}>✏️</button>
                <button onClick={() => onDelete(w.id)}>🗑</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default WorkoutList;
