// Frontend code for the eLearning platform
// Using React.js as the framework

// --- index.js ---
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// --- App.js ---
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './pages/Admin/Dashboard';
import LecturerDashboard from './pages/Lecturer/Dashboard';
import StudentDashboard from './pages/Student/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// --- Navbar.js ---
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          eLearning Platform
        </Link>
        <ul className="nav-menu">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// --- Footer.js ---
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 eLearning Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

// --- Admin/Dashboard.js ---
import React from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <p>Manage students, courses, and schedules.</p>
    </div>
  );
};

export default AdminDashboard;

// --- Lecturer/Dashboard.js ---
import React from 'react';
import './Dashboard.css';

const LecturerDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Lecturer Dashboard</h1>
      <p>Upload course content and manage lectures.</p>
    </div>
  );
};

export default LecturerDashboard;

// --- Student/Dashboard.js ---
import React from 'react';
import './Dashboard.css';

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <p>Register for courses and view your progress.</p>
    </div>
  );
};

export default StudentDashboard;

// --- Auth/Login.js ---
import React from 'react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// --- Auth/Register.js ---
import React from 'react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

// --- App.css ---
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: auto;
}

.dashboard {
  padding: 20px;
}

.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
