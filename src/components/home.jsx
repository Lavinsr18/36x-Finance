import React from 'react';
import '../css/navbar.css';
import img1 from "../assets/13.png"
import Test from "../pages/test"

const Home = () => {
  return (
    <>
    <div className='new'>
        <div className='hero'>
        <div className="too animated fadeInLeft">
            <p className='one'>Grow With Confidence</p>
           <h2 className='head'> Access world class Finance Product under one Roof</h2>
           <h2 className='headd'> Invest With 36x Finance.</h2>
           <p className='head2'>Finance is a term that addresses matters regarding the management, creation, and study of money and investments</p>
           {/* <h2 className='head'> Finance Product</h2>
           <h2 className='head'>under one Roof</h2> */}
           <div className="hero-buttons">
      <button className="primary-btn">Book Free Consultation</button>
      </div>          
          </div>
          <img src={img1} alt="Finance illustration" className="hero-image animated fadeInRight" />
        </div>
    </div>
        <Test/>
    </>
  );
  };
  
  export default Home;
  
  {/* <div className="home-container">
    </div>
    <div className="hero-buttons">
        <button className="primary-btn">Book Consultation</button>
        <button className="secondary-btn">Download Free Tax Planner</button>
      </div> */}