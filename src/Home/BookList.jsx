import React from 'react';
import BookCard from './BookCard';
import './BookList.css';
function BookList({ books }) {
    console.log(Array.isArray(books)); // Should log true
  console.log(books); // Check the structure of books
  return (
    <div className='book-list'>
      {books.map((book, index) => (
        <BookCard
          key={index}
          id={book.id}
          title={book.title}
          author={book.author}
          cover_image_url={book.cover_image_url}
          rating={book.rating}
          publishDate={book.publish_date}
          description={book.description}
        />
      ))}
    </div>
  );
}

export default BookList;
