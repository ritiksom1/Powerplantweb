import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (formData.email.trim() === '' || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3000/login", formData
          
        );
        console.log(response.data);

       
        if (response.data.success) {
          alert('Login Successful!');
          navigate('/dashboard'); 
        } else {
          alert('Login Failed: Invalid email or password');
        }
      } catch (error) {
        console.error('There was an error!', error);
        alert('There was an error with your request. Please try again.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="Image-container">
          <img src={GaloEnergy} alt="Galo Energy" className="Galo-Energy-Image" />
        </div>

        <div className='heading'>
          <h2>RMS Login</h2>
        </div>
       
        <form onSubmit={handleSubmit}>
          <div className="form-controller">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-controller password-container">
            <label htmlFor="password">Password</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            <span
              onClick={togglePasswordVisibility}
              className="eye-icon"
            >
              {isPasswordVisible ? '🙈' : '👁️'}
            </span>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="datasubmit" type="submit">
            Login
          </button>
          <div className="para">
            <p>
              Not a member? <Link to="/registration">Register Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
