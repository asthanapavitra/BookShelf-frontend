import React from 'react';
import Navbar from './Navbar';
import SearchContainer from './SearchContainer';
import BookList from './BookList';
import Footer from './footer';
import './Home.css';

function Home({ books, onSearch, onSort }) {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <SearchContainer onSearch={onSearch} onSort={onSort} />
        <BookList books={books} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
