import React from "react";

const Stats = ({ workouts }) => {
  const totalWorkouts = workouts.length;
  const totalDuration = workouts.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);

  return (
    <div className="stats">
      <div className="stat-item">
        <h3>{totalWorkouts}</h3>
        <p>Total Workouts</p>
      </div>
      <div className="stat-item">
        <h3>{totalDuration}</h3>
        <p>Total Duration (min)</p>
      </div>
      <div className="stat-item">
        <h3>{totalCalories}</h3>
        <p>Total Calories Burned</p>
      </div>
    </div>
  );
};

export default Stats;
