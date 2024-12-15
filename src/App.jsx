import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter as Router
import './App.css'; // Ensure this file is correctly imported and styled
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Appointments from './pages/Appointments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;
