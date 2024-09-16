import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About My Bookshelf</h1>
      <p>
        Welcome to My Bookshelf! This website is a personal collection of all the books I've read over the years.
        Here, you can find summaries, ratings, and notes on each book. Whether you're looking for a new book to read or 
        just curious about my reading journey, I hope you find something interesting here.
      </p>
      <p>
        This site was built with React, Node.js, Express, and PostgreSQL. The goal was to create a user-friendly interface
        where I can easily manage my book collection and share my thoughts with others.
      </p>
      <p>
        If you have any suggestions or want to discuss books, feel free to reach out!
      </p>
    </div>
  );
}

export default About;
