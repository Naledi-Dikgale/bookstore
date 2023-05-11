import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/Books/bookSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div>
      <h2>Books</h2>
      <ul className="bookDisplay">
        {books.map((book) => (
          <div key={book.item_id}>
            {book.item_id}
            <li>{book.title}</li>
            <li>{book.author}</li>
            <button
              type="button"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              Remove Book
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default BookList;
