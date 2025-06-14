import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSurveyById,fetchSurveyResponse } from "../api";

export default function SurveyView() {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchSurveyById(id).then(setSurvey);
    fetchSurveyResponse(id).then(setData);
  }, [id]);

  if (!survey) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{survey.title} (View Only)</h2>
      <div className="survey-view">
        {survey.questions.map((q) => (
          <div key={q.id} className="form-group">
            <label>{q.label}:</label>
            <div className="answer">{data[q.id] || "(No answer)"}</div>
          </div>
        ))}
    </div>
    </div>
  );
}
