import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

function HomePage() {
  return (
    <div className="book-container">
      <BookList />
      <BookForm />
    </div>
  );
}

export default HomePage;
