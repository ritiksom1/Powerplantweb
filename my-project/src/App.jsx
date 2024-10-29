import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Approutes from './AppRoutes/Approutes';
import AdminLogin from './Admin/AdminLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const adminCredentials = { email: 'admin@example.com', password: 'admin123' };
  const customerCredentials = { email: 'customer@example.com', password: 'customer123' };

  const handleLogin = (email, password, role) => {
    if (role === 'admin') {
      if (email === adminCredentials.email && password === adminCredentials.password) {
        setIsAuthenticated(true);
        setUserRole('admin');
      } else {
        alert('Invalid admin credentials');
      }
    } else if (role === 'customer') {
      if (email === customerCredentials.email && password === customerCredentials.password) {
        setIsAuthenticated(true);
        setUserRole('customer');
      } else {
        alert('Invalid customer credentials');
      }
    }
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/login/admin" element={<AdminLogin onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login/admin" />} />
        </Routes>
      ) : (
        <div className="flex flex-col h-screen">
          <Header
            customerName={userRole === 'customer' ? "John Doe" : ""}
            customerAddress={userRole === 'customer' ? "123 Solar St." : ""}
            plantCapacity={userRole === 'customer' ? 10 : ""}
            isAdmin={userRole === 'admin'}
          />
          <div className="flex flex-grow">
            <Sidebar />
            <div className="flex-grow p-6 bg-gray-100">
              <Routes>
                <Route path="/*" element={<Approutes />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
