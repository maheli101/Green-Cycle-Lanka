import React from "react";
import homeImage from "../assets/homeImage.jpg";
import "./HomeMain.css";

export default function HomeMain() {
  return (
    <div>
      <main>
        <img src={homeImage} alt="homeImage" className="homeImage" />

        <section className="intro-container">
          <h1>Welcome To Green Cycle Lanka!</h1>
          <p>
            Here, Suppliers, Buyers, Yard Management, and Drivers Unite For
            Seamless Supply Chain Integration. Our Innovative Platform Connects
            All Key Stakeholders, Transforming How Recyclable Materials Are
            Traded, Transported, And Processed.
          </p>
          <p>
            Buyers Effortlessly Discover, Negotiate, and Secure High-Quality,
            Environmentally Friendly Materials. Suppliers Efficiently Expand
            Their Market Reach, Maximizing Revenue While Reducing Waste.
          </p>
          <p>
            Embrace The Future of Sustainable Material Management With Us Today,
            Where Green Cycle Links Every Step In The Recycling Ecosystem, From
            Supplier Production To Yard Collection.
          </p>
        </section>

        <section className="intro-container">
          <h2>Our Services</h2>
          <p>
            Supplier Portal: Connect with trusted suppliers to responsibly
            dispose of waste materials and contribute to a cleaner environment.
          </p>
          <button className="service-button">Go to Supplier Interface</button>
          <p>
            Buyer Marketplace: Explore a wide range of recycled products and
            materials sourced from reliable suppliers.
          </p>
          <button className="service-button">Go to Buyer Interface</button>
        </section>

        <section className="intro-container">
          <h2>Join Us in Building a Sustainable Future</h2>
          <p>
            Join our community of environmentally-conscious businesses and
            individuals committed to reducing waste and promoting
            sustainability. Together, we can make a positive impact on the
            planet while driving innovation in waste management practices.
          </p>
        </section>

        <section className="call-to-action">
          <h2>Ready to take the first step towards a greener future?</h2>
          <p>
            Sign up now to access our platform and start making a difference!
          </p>
          <a href="#" className="sign-up-button">
            Sign Up
          </a>
        </section>
      </main>
    </div>
  );
}