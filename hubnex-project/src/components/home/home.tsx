import "./home.css";
import { FaArrowRightLong } from "react-icons/fa6";




<div>
    <h1>Let's Talk-Contact our Experts</h1>
    <p>Tell us a little bit about yourself and your queries. Our customer experience team will reach out to you within 24 hours</p>
  </div>



import React, { useState } from 'react';

function ContactForm() {
  
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [reasonForContact, setReasonForContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log('Form submitted:', {
      name,
      businessName,
      businessEmail,
      contactNumber,
      reasonForContact,
    });
  };

  return (
   
<div className="home-section">

<div >
      <img src="hubnex-project/src/components/home/Frame 583.png" alt="" />
    </div>
    <form onSubmit={handleSubmit}>
      <h1>Let's Talk-Contact our Experts</h1>
      <p>Tell us a little bit about yourself and your queries. Our customer experience <br />team will reach out to you within 24 hours</p>
      <div className="nb">
      <div>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="businessName">Business Name*</label>
        <input
          type="text"
          id="businessName"
          value={businessName}
          placeholder="Business Name"
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
      </div>
      </div>

      <div>
        <label htmlFor="businessEmail">Business Email*</label>
        <input
          type="email"
          id="businessEmail"
          value={businessEmail}
          placeholder="you@company.com"
          onChange={(e) => setBusinessEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="contactNumber">Contact Number*</label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          
          placeholder="+912345678905"
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="reasonForContact">Reason for Contact*</label>
        <textarea
          id="reasonForContact"
          value={reasonForContact}
          onChange={(e) => setReasonForContact(e.target.value)}
          required
        />
      </div>

      <button className="btn-submit" type="submit">Submit<FaArrowRightLong /></button>
    </form>
    </div>
  );
}

export default ContactForm;