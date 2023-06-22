import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-opt1">
      <div className="page-width">
        <div className="about-opt1-inner">
          <div className="about-opt1-left">
            <img src="https://www.examen.ru/assets/images/2017/20171206_konditer_1.jpg" alt="About" />
          </div>
          <div className="about-opt1-right">
            <h2>
            <span className="bold-italic">ABOUT SWEETEST</span>
            </h2>
            <p>
            <span className="bold">SweetEst offers a range of customizable options for customers.
               Whether it's personalized designs, flavors, or dietary preferences,
               customers can tailor their cakes to suit their specific needs and preferences.
               Our production maintains strict quality control measures throughout the production process.
               Here are available traditional classics and innovative creations.
               Our team constantly explores and incorporates the latest international
               trends in cake design and flavors to ensure customers always have access to exciting and unique options.
               Here are available traditional classics and innovative creations.
               Our team constantly explores and incorporates the latest international trends in cake design
               and flavors to ensure customers always have access to exciting and unique options.
               Our team is dedicated to creating a delightful and memorable experience for every customer,
               from the moment they place an order to the delivery of their beautifully crafted cake.
               </span>
               </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
