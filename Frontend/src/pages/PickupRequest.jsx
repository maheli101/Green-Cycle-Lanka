import React, { useState } from 'react';

export default function PickupRequest() {
  const [requestNo, setRequestNo] = useState('');
  const [requestType, setRequestType] = useState('plastic');
  const [amount, setAmount] = useState('20kg');
  const [address, setAddress] = useState('');
  const [requestStatus, setRequestStatus] = useState('processing');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form submitted:', {
      requestNo,
      requestType,
      amount,
      address,
      requestStatus,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="requestNo">Request No:</label>
        <input
          type="text"
          id="requestNo"
          value={requestNo}
          onChange={(e) => setRequestNo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="requestType">Type:</label>
        <select
          id="requestType"
          value={requestType}
          onChange={(e) => setRequestType(e.target.value)}
        >
          <option value="plastic">Plastic</option>
          <option value="glass">Glass</option>
          <option value="metal">Metal</option>
          <option value="paper">Paper</option>
          {/* Add other options here */}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="requestStatus">Request Status:</label>
        <input
          type="text"
          id="requestStatus"
          value={requestStatus}
          onChange={(e) => setRequestStatus(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
