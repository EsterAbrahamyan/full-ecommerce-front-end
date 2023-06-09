import React from 'react';
import Category from '../../components/Category/Category';
import Slider from '../../Layouts/Slider/Slider';

export default function Home() {
  return (
    <React.Fragment>
      <Slider />
      <Category />
    </React.Fragment>
  );
}
