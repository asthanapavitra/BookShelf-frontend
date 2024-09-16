import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

function BookDetails({ books }) {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  return (
    <div className="book-details">
      <div className="book-header">
        <img src={book.cover_image_url} alt={`${book.title} cover`} className="book-cover" />
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">by {book.author}</p>
          <p className="book-publish-date">Published: {book.publishDate}</p>
          <p className="book-rating">Rating: {book.rating}/5</p>
        </div>
      </div>
      <div className="book-body">
        <h2>Summary</h2>
        <p className="book-summary">{book.summary}</p>
        <h2>Notes</h2>
        <p className="book-notes">{book.notes}</p>
      </div>
    </div>
  );
}

export default BookDetails;

