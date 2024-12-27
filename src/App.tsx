import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/auth/Login';
import AuthError from './components/auth/AuthError';
import DriveFiles from './components/drive/DriveFiles';
import AuthSuccessHandler from './components/auth/AuthSuccessHandler';
import NavBar from './components/common/NavBar';
import { authService } from './services/authService';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await authService.isAuthenticated();
      setIsAuthenticated(authenticated);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <>
      <NavBar />
      {children}
    </>
  ) : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth-error" element={<AuthError />} />
        <Route path="/auth-success" element={<AuthSuccessHandler />} />
        <Route
          path="/drive"
          element={
            <ProtectedRoute>
              <DriveFiles />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;