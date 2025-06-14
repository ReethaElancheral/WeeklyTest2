
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllSurveys } from "../api";

export default function Home() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    fetchAllSurveys().then(setSurveys);
  }, []);

  return (
    <div className="container">
      <h1>📋 All Surveys</h1>
      {surveys.length === 0 && <p>No surveys available.</p>}
      {surveys.map((survey) => (
        <div key={survey.id} className="survey-card">
          <h3>{survey.title}</h3>
          <Link to={`/surveys/${survey.id}/edit`} className="btn">📝 Edit</Link>
          <Link to={`/surveys/${survey.id}/view`} className="btn">👁️ View</Link>
        </div>
      ))}
    </div>
  );
}
