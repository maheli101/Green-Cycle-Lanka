//import React from 'react'
import "./Styles/customerRegistation.css";

export default function customerRegistation() {
  return (
    <form action="" className="custom-reg-full">
      <div className="custom-reg-allparts">
        <div className="custom-reg-head">
          <div className="custom-reg-hair">
            <h1 className="custom-reg-word">Register Form</h1>
          </div>
        </div>

        <div className="custom-reg-infield">
          <input type="text" placeholder="Enter Name" required />

          <input type="password" placeholder="Enter Email" required />

          <input
            type="password"
            placeholder="contact-number"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <input type="password" placeholder="password" required />
          <input type="password" placeholder="Repeat Password" required />
          
          <div>
            
          </div>
          <div className="custom-reg-dropdown">
            <label htmlFor="userType">Choose Your Type:</label>
            <select id="userType">
              <option value="driver">Driver</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
        </div>
        <div className="custom-reg-infield">
        <input type="text" placeholder="verify-code" required />

        </div>
        
       <div className="custom-reg-lastf">
       <button type="submit" className="custom-reg-reg-btn">
          Register
        </button>

        <div className="custom-reg-sign-reg">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
       </div>
        </div>
      </div>
    </form>
  );
}
