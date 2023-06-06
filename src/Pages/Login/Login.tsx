import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Slices/usersSlice';
import './Login.css'
import { AppDispatch } from '../../app/store';
import { Link } from 'react-router-dom';


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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResult = await dispatch(login(user));

    if (loginResult.payload) {
      window.location.href = '/'; // Navigate to the home page after successful login
    } else {
      window.location.href = '/register'; // Navigate to the register page if login fails
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="container">
      <div className="login-register">
        <form className="login-register-form" onSubmit={handleSubmit}>
          <h4>Log In</h4>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <a href="#">Forgot your password?</a>
          </div>
          <div className="form-group">
            <button className="cmn-btn" type="submit">
              Sign In
            </button>
          </div>
          <div className="form-group">
            <Link to="/register">Create account</Link>
          </div>
        </form>
        {/* Render the other forms for create account and reset password */}
      </div>
    </div>
  );
};

export default Login;
