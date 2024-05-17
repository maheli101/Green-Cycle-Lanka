import React, { useState } from "react";

const Request = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!name || !type || !amount || !address) {
      alert("Please fill in all fields");
      return;
    }
   
    const addressPattern = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (!addressPattern.test(address)) {
      alert("Please enter a valid address");
      return;
    }
  
    alert("Form submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.header}>Request Details</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={styles.select}
          >
            <option value="">Select Type</option>
            <option value="Plastic">Plastic</option>
            <option value="Glass">Glass</option>
            <option value="Metal">Metal</option>
            <option value="Paper">Paper</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Amount (kg)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
          />
        </div>
        <p style={styles.processingText}>We are processing your Request</p>
        <p style={styles.viewde}>View Pickup Request Details in Your User Account</p>
        <div style={styles.buttons}>
          <button type="submit" style={styles.button}>
            Ok
          </button>
          <button type="button" style={styles.button} onClick={() => alert('Go to user account')}>
            Go To User Account
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('./assets/RequestDetails.jpg')", // Replace with your background image URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "500px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  processingText: {
    
    textAlign: "center",
    margin: "20px 0",
    color: "#333",

  
  },

  viewde:{ 
    textAlign: "center",
    margin: "20px 0",
    color: "#333",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#5cb85c",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Request;
