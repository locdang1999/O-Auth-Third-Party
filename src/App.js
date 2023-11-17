import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
