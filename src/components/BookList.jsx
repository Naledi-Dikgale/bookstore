function BookList() {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ];
  return (
    <div>
      <h2>Books</h2>
      <ul className="bookDisplay">
        {books.map((book) => (
          <>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <button type="button">Remove Book</button>
          </>
        ))}
      </ul>
    </div>
  );
}
export default BookList;
