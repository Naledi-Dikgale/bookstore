import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchBooks, removeBookFromApi } from '../redux/Books/bookSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div>
      <ul className="bookDisplay">
        {books.map((book) => (
          <div className="book-wrapper" key={book.item_id}>
            <li>{book.category}</li>
            <li className="book-title">{book.title}</li>
            <li>{book.author}</li>
            <button className="remove-book"
              type="button"
              onClick={() => {
                dispatch(removeBook(book.item_id));
                dispatch(removeBookFromApi(book.item_id));
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
