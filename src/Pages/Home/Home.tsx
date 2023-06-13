import React from 'react';
import Category from '../../components/Category/Category';
import Slider from '../../Layouts/Slider/Slider';
import Footer from '../../Layouts/Footer/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Slider />
      <Category />
      <Footer />
    </React.Fragment>
  );
}
