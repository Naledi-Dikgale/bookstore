import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <BookList />
      <BookForm />
    </div>
  );
}

export default HomePage;
