import React, { useState } from 'react';
import './ContactUs.css'

const ContactUsPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
    // You can access the form values using the state variables (fullName, email, phoneNumber, selectedOption, message)
  };

  return (
    <div className="contact-us">
      <div className="cont-top">
        <h2>Contact Us</h2>
        <p>Please fill in the form and our representative will get back to you.</p>
      </div>
      <div className="contact-group">
        <div className="contact-form-prt">
          <h4>Get in touch</h4>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <input
                className="contact-form-control"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="contact-form-group">
              <input
                type="email"
                className="contact-form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-form-group">
              <input
                className="contact-form-control"
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="contact-form-group">
              <select
                className="contact-form-control"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="">Cooking Class</option>
                <option value="Baking &amp; Pastry">Baking &amp; Pastry</option>
                <option value="Exotic Cuisine">Exotic Cuisine</option>
                <option value="French Desserts">French Desserts</option>
                <option value="Seafood &amp; Wine">Seafood &amp; Wine</option>
              </select>
            </div>
            <div className="contact-form-group fg-full-width">
              <textarea
                className="contact-form-control"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="contact-form-group fg-full-width">
              <button className="contact-btn contact-submit-btn" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h4>Contact Info</h4>
          <div className="c-info-list">
            <div className="c-info-item">
              <span className="c-info-icon">
                <img src="https://coderwrap.com/wp-content/uploads/2023/01/loction.svg" alt="Address" />
              </span>
              <div className="c-info-cont">
                <strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016
              </div>
            </div>
            <div className="c-info-item">
              <span className="c-info-icon">
                <img src="https://coderwrap.com/wp-content/uploads/2023/01/phone.svg" alt="Phone" />
              </span>
              <div className="c-info-cont">
                <strong>Phone:</strong> +37498101010
              </div>
            </div>
            <div className="c-info-item">
              <span className="c-info-icon">
                <img src="https://coderwrap.com/wp-content/uploads/2023/01/email.svg" alt="Email" />
              </span>
              <div className="c-info-cont">
                <strong>Email:</strong> ester@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
