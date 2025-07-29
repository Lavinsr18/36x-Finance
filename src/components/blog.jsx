import React from 'react';
import '../css/BlogSection.css';

const blogs = [
  {
    title: "Top 5 Tax Saving Tips for 2025",
    description:
      "Learn how to optimize your income and legally reduce your tax liability with these powerful strategies.",
  },
  {
    title: "How to Register Your Startup in India",
    description:
      "Step-by-step guide for founders on incorporating a private limited company and complying with startup laws.",
  },
  {
    title: "Beginner's Guide to Bonds & PMS",
    description:
      "Everything you need to know about premium investment products tailored for HNIs and high-return seekers.",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Knowledge Hub</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
