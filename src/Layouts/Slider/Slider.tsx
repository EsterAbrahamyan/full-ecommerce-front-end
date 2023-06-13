// Slider.jsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { nextSlide, prevSlide } from '../../Slices/sliderSlice';
import './Slider.css';

function Slider() {
  const dispatch = useDispatch();
  const slides = useSelector((state: RootState) => state.slider.slides);
  const activeIndex = useSelector((state: RootState) => state.slider.activeIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const handleNextSlide = () => {
    dispatch(nextSlide());
  };

  const handlePrevSlide = () => {
    dispatch(prevSlide());
  };

  return (
    <div className="slider-group">
      <div className="sliders">
        {slides.map((slide: any, index: number) => (
          <div key={index} className={`slide ${index === activeIndex ? 'active' : ''}`}>
            <img src={slide.imageSrc} alt={slide.altText} />
             <div className="slide-cont">
              <div className="slide-cont-inner">
               
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows-controls">
        <span className="arr-left" id="slidePrev" onClick={handlePrevSlide}>
          Prev
        </span>
        <span className="arr-right" id="slideNext" onClick={handleNextSlide}>
          Next
        </span>
      </div>
    </div>
  );
}

export default Slider;
