import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNewBook.css';

function AddNewBook({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({
      title,
      author,
      publishDate: publishedYear,
      rating,
      description,
      summary,
      notes,
      // cover: "https://covers.openlibrary.org/b/id/8225261-L.jpg" // Placeholder cover
    });
    navigate("/"); // Redirect to home page
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Published Year" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required />
      <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
      <input type="text" placeholder="Description (1-2 lines)" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <textarea placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required></textarea>
      <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} required></textarea>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddNewBook;

