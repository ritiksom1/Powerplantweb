import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Approutes from './AppRoutes/Approutes';
import AdminLogin from './Admin/AdminLogin';
import CustomerLogin from './customer/CustomerLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const adminCredentials = { email: 'admin@example.com', password: 'admin123' };
  const customerCredentials = { email: 'customer@example.com', password: 'customer123' };

  const handleLogin = (email, password, role) => {
    if (role === 'admin' && email === adminCredentials.email && password === adminCredentials.password) {
      setIsAuthenticated(true);
      setUserRole('admin');
    } else if (role === 'customer' && email === customerCredentials.email && password === customerCredentials.password) {
      setIsAuthenticated(true);
      setUserRole('customer');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/login/admin" element={<AdminLogin onLogin={(email, password) => handleLogin(email, password, 'admin')} />} />
          <Route path="/login/customer" element={<CustomerLogin onLogin={(email, password) => handleLogin(email, password, 'customer')} />} />
          <Route path="*" element={<Navigate to="/login/admin" />} />
        </Routes>
      ) : (
        <div className="flex flex-col h-screen">
          <Header
            customerName="Kaushal"
            customerAddress="592 chh/57 ramnagar, Haryana"
            plantCapacity="10"
          />
          <div className="flex flex-grow">
            <Sidebar />
            <div className="flex-grow p-6 bg-gray-100">
              <Routes>
                {/* Protected routes after login */}
                <Route path="/*" element={<Approutes />} />
                {/* Redirect to dashboard as default */}
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
