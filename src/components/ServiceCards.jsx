import React from 'react';
import '../css/ServiceCards.css';

const services = [
  {
    title: "Individuals & Freelancers",
    description:
      "Tax planning, ITR filing, insurance, and legal support for professionals and gig workers.",
    icon: "👤",
  },
  {
    title: "Startups & MSMEs",
    description:
      "Business registration, GST, accounting, and compliance solutions tailored for early-stage founders.",
    icon: "🏢",
  },
  {
    title: "HNIs & Investors",
    description:
      "Access premium financial instruments, bonds, PMS, and custom investment strategies.",
    icon: "💰",
  },
];

const ServiceCards = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Who We Serve</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="hero-buttons">
          <button className="primary-btn">Book Consultation</button>
        </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
