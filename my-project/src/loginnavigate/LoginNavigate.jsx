import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLogin from './components/CustomerLogin'; // Import CustomerLogin
import AdminLogin from './components/AdminLogin'; // Import AdminLogin

function LoginNavigate() {
  return (
    <Router>
      <Routes>
        {/* Define Routes for Customer and Admin Login */}
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Redirect to customer login as the default */}
        <Route path="*" element={<Navigate to="/customer-login" />} />
      </Routes>
    </Router>
  );
}

export default LoginNavigate;
