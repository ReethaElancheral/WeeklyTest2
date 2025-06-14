import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchSurveyById, fetchSurveyResponse, saveSurveyResponse } from "../api";
import withAutoSave from "../components/withAutoSave";
import LivePreviewPortal from "../components/LivePreviewPortal";

function SurveyForm({ survey, data, onChange, errors }) {
  if (!survey) return null;

  return (
    <form className="survey-form" onSubmit={(e) => e.preventDefault()}>
      <h2>{survey.title}</h2>
      {survey.questions.map((q) => (
        <div key={q.id} className="form-group">
          <label>
            {q.label}
            {q.required && <span className="required">*</span>}
          </label>

          {q.type === "text" && (
            <input
              type="text"
              value={data[q.id] || ""}
              onChange={(e) => onChange(q.id, e.target.value)}
            />
          )}

          {q.type === "email" && (
            <input
              type="email"
              value={data[q.id] || ""}
              onChange={(e) => onChange(q.id, e.target.value)}
            />
          )}

          {q.type === "textarea" && (
            <textarea
              value={data[q.id] || ""}
              onChange={(e) => onChange(q.id, e.target.value)}
            />
          )}

          {q.type === "radio" && q.options && (
            <div className="radio-group">
              {q.options.map((opt) => (
                <label key={opt} className="radio-label">
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    checked={data[q.id] === opt}
                    onChange={() => onChange(q.id, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}

          {errors[q.id] && <div className="error">{errors[q.id]}</div>}
        </div>
      ))}
    </form>
  );
}

const AutoSaveSurveyForm = withAutoSave(SurveyForm); 

export default function SurveyEditBase() {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchSurveyById(id).then(setSurvey);
    fetchSurveyResponse(id).then(setData);
  }, [id]);

  const validateForm = useCallback((currentData) => {
    const errs = {};
    if (!survey) return errs;

    survey.questions.forEach((q) => {
      if (q.required && (!currentData[q.id] || currentData[q.id].toString().trim() === "")) {
        errs[q.id] = `${q.label} is required`;
      }

      if (q.type === "email" && currentData[q.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(currentData[q.id])) {
          errs[q.id] = "Invalid email address";
        }
      }
    });

    return errs;
  }, [survey]);

  const save = async (dataToSave) => {
    const validationErrors = validateForm(dataToSave);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSaving(true);
      await saveSurveyResponse(id, dataToSave);
      setSaving(false);
    }
  };

  function handleChange(questionId, value) {
    setData((prev) => ({ ...prev, [questionId]: value }));
  }

  return (
    <div className="container">
      <AutoSaveSurveyForm
        survey={survey}
        data={data}
        onChange={handleChange}
        errors={errors}
        onSave={save}
      />

      {saving && <div className="saving-indicator">Saving...</div>}

      <button className="btn-preview" onClick={() => setShowPreview(true)}>
        Live Preview
      </button>

      {showPreview && (
        <LivePreviewPortal onClose={() => setShowPreview(false)} survey={survey} data={data} />
      )}
    </div>
  );
}
