import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Slices/usersSlice';
import './Login.css'
import { AppDispatch } from '../../app/store';
import { Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    password: ''
  });

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
      const decoded: any = decodeToken(JSON.parse(userFromLocalStorage)?.jwt);
      setUser((prevUser) => ({ ...prevUser, email: decoded.email }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResult = await dispatch(login(user));

    if (loginResult.payload) {
      window.location.href = '/user'; 
    } else {
      window.location.href = '/register'; 
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="login-container">
      <div className="login-register">
        <form className="login-register-form" onSubmit={handleSubmit}>
          <h4>Log In</h4>
          <div className="login-form-group">
            <input
              type="email"
              className="login-form-control"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="login-form-group">
            <input
              className="login-form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="login-form-group">
            <a href="#">Forgot your password?</a>
          </div>
          <div className="login-form-group">
            <button className="login-cmn-btn" type="submit">
              Sign In
            </button>
          </div>
          <div className="login-form-group">
            <Link to="/register">Create account</Link>
          </div>
        </form>
        {/* Render the other forms for create account and reset password */}
      </div>
    </div>
  );
};

export default Login;
