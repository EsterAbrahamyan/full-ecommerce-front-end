import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Slices/usersSlice';
import './Register.css';
import { AppDispatch } from '../../app/store';
import Login from '../Login/Login';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [registered, setRegistered] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(register(user));
    setRegistered(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  if (registered) {
    return <Login />; 
  }

  return (
    <div className="register-container">
      <div className="login-register">
        <form className="login-register-form" onSubmit={handleRegister}>
          <h4>Create account</h4>
          <div className="register-form-group">
            <input
              type="text"
              className="register-form-control"
              placeholder="First Name"
              name="firstname"
              value={user.firstname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="register-form-group">
            <input
              type="text"
              className="register-form-control"
              placeholder="Last Name"
              name="lastname"
              value={user.lastname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="register-form-group">
            <input
              type="email"
              className="register-form-control"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="register-form-group">
            <input
              className="register-form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="register-form-group">
            <button className="register-cmn-btn" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
