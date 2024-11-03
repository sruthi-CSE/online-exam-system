import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exam" element={<Exam />} />
        </Routes>
      </Router>
    
  );
}

export default App;