import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './Yardenterence.css';
import Mahimi from '../assets/photos/yard.jpg';

function Yardenterence() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <form>
            <img className="yard" src={Mahimi} alt="" />
          </form>
          <div className="overlay">
            <form className="title">
              <h1>Yard Management</h1>
            </form>
            <button>Pick-Up Requests</button>
            <button>Order Requests</button>
            <button>Stock Update</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Yardenterence;