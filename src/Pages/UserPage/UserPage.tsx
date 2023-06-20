import React, { useState, useEffect } from 'react';
import Category from '../../components/Category/Category';
import Slider from '../../Layouts/Slider/Slider';
import Footer from '../../Layouts/Footer/Footer';
import { decodeToken } from 'react-jwt';

export default function UserPage() {
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);

  console.log(decoded)
  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('user');
    setUser(userFromLocalStorage);
  }, []);

  return (
    <React.Fragment>
      <Slider />
      <Category />
      <Footer />
    </React.Fragment>
  );
}
