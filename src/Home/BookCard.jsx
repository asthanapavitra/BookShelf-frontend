import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

function BookCard({ id, title, author, cover_image_url, rating, publishDate, description }) {
  return (
    <div className='book-card'>
      <img src={cover_image_url} alt={`${title} cover`} className='book-cover' />
      <div className='book-info'>
        <h3 className='book-title'>{title}</h3>
        <p className='book-author'>by {author}</p>
        <p className='book-publish-date'>Published: {publishDate}</p>
        <p className='book-rating'>Rating: {rating}/5</p>
        <p className='book-description'>{description}</p>
        <Link to={`/book/${id}`} className='book-link'>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
