

const surveysDB = {
  1: {
    id: 1,
    title: "Customer Satisfaction Survey",
    questions: [
      { id: "q1", type: "text", label: "Your Name", required: true },
      { id: "q2", type: "email", label: "Email Address", required: true },
      {
        id: "q3",
        type: "radio",
        label: "Rate our service",
        options: ["Poor", "Average", "Good", "Excellent"],
        required: true,
      },
      { id: "q4", type: "textarea", label: "Additional Feedback", required: false },
    ],
  },
  2: {
    id: 2,
    title: "Employee Engagement Survey",
    questions: [
      { id: "q1", type: "text", label: "Employee Name", required: true },
      {
        id: "q2",
        type: "radio",
        label: "Are you satisfied with your work environment?",
        options: ["Yes", "No", "Somewhat"],
        required: true,
      },
      { id: "q3", type: "textarea", label: "Suggestions for Improvement", required: false },
    ],
  },
  3: {
    id: 3,
    title: "Product Feedback Survey",
    questions: [
      { id: "q1", type: "text", label: "Your Name", required: true },
      { id: "q2", type: "email", label: "Email", required: false },
      {
        id: "q3",
        type: "radio",
        label: "How do you rate our product?",
        options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
        required: true,
      },
      { id: "q4", type: "textarea", label: "What did you like or dislike?", required: false },
    ],
  },
  4: {
    id: 4,
    title: "Event Feedback Survey",
    questions: [
      { id: "q1", type: "text", label: "Your Name", required: true },
      {
        id: "q2",
        type: "radio",
        label: "Did you enjoy the event?",
        options: ["Yes", "No"],
        required: true,
      },
      {
        id: "q3",
        type: "textarea",
        label: "Any comments or suggestions?",
        required: false,
      },
    ],
  },
};


let responsesDB = {
  1: { q1: "", q2: "", q3: "", q4: "" },
};

export async function fetchSurveyById(id) {
  return new Promise((res) => {
    setTimeout(() => res(surveysDB[id]), 500);
  });
}

export async function fetchSurveyResponse(id) {
  return new Promise((res) => {
    setTimeout(() => res(responsesDB[id] || {}), 300);
  });
}

export async function saveSurveyResponse(id, response) {
  return new Promise((res) => {
    responsesDB[id] = response;
    setTimeout(() => res({ success: true }), 300);
  });
}

export async function fetchAllSurveys() {
  return new Promise((res) => {
    setTimeout(() => res(Object.values(surveysDB)), 300);
  });
}
