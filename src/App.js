import "./styles.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";

export default function App() {
  return (
    <div className="App">
      <Login />
      <Dashboard />
      <Exam />
    </div>
  );
}
