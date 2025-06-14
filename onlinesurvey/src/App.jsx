
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SurveyEditBase from "./pages/SurveyEdit";
import SurveyView from "./pages/SurveyView";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surveys/:id/edit" element={<SurveyEditBase />} />
        <Route path="/surveys/:id/view" element={<SurveyView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
