// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import LoginPage from './pages/login_form/Loginpage';
// import HomePage from './pages/HomePage';
// import ProfilePage from './pages/ProfilePage';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import './index.css';

// function App() {
//   const location = useLocation(); // Get the current location

//   return (
//     <div className="app-container">
//       {/* Conditionally render Navbar */}
//       {location.pathname !== '/' && location.pathname !== '/login' && <Navbar />}

//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>

//       {/* Conditionally render Footer */}
//       {location.pathname !== '/login' && <Footer />}
//     </div>
//   );
// }

// function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default AppWrapper;
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext'; // Add this import
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/login_form/Loginpage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ResourcesPage from './pages/ResourcesPage';
import CompaniesPage from './pages/CompaniesPage';
import SeniorsPage from './pages/SeniorsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Settings from './pages/Settings';
import './index.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Conditionally render Navbar */}
      {location.pathname !== '/' && location.pathname !== '/login' && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/seniors" element={<SeniorsPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Conditionally render Footer */}
      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <SettingsProvider> {/* Wrap with SettingsProvider */}
        <App />
      </SettingsProvider>
    </Router>
  );
}

export default AppWrapper;