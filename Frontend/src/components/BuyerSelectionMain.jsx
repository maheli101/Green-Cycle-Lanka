import React from "react";
import "./BuyerSelectionMain.css"

export default function BuyerSelectionMain() {
  return (
    <div>
      <h2>Welcome to the Buyer Interface of Green Cycle Lanka</h2>
      <p>Please select your category from below:</p>
      <div className="category-buttons">
        <button className="glass"></button>
        <button className="metal"></button>
        <button className="paper"></button>
        <button className="plastic"></button>
      </div>
    </div>
  );
}