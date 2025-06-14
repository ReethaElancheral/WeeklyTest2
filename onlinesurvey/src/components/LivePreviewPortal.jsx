import React from "react";
import ReactDOM from "react-dom";

export default function LivePreviewPortal({ onClose, survey, data }) {
  if (!survey) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="btn-close" onClick={onClose}>
          ✕
        </button>
        <h2>Live Preview: {survey.title}</h2>
        <div className="survey-view">
          {survey.questions.map((q) => (
            <div key={q.id} className="form-group">
              <label>{q.label}:</label>
              <div className="answer">{data[q.id] || "(No answer)"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
