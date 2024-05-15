import React, { useState } from 'react';
import './RequestDetails.css'
import backgroundImage from '../assets/photoes/RequestDetails.jpg'

const styles ={
  formContainer:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition:'center'
  },
}

export default function RequestDetails() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    amount: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call, data processing)
    console.log('Form submitted:', formData);
  };

  return (
    <div style={StyleSheetList.formContainer}>
    <div className='form-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Request Details</h2>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleInputChange} required>
            <option value="">Select type</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
            <option value="glass">Glass</option>
            <option value="paper">Paper</option>
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
    </div>
  );
}