import { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchBooks, removeBookFromApi } from '../redux/Books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="progressWrapper">
      <ul className="bookDisplay">
        {books.map((book) => (
          <div className="book-wrapper" key={book.item_id}>
            <div>
              <li>{book.category}</li>
              <li className="book-title">{book.title}</li>
              <li>{book.author}</li>
              <button
                className="remove-book"
                type="button"
                onClick={() => {
                  dispatch(removeBook(book.item_id));
                  dispatch(removeBookFromApi(book.item_id));
                }}
              >
                Remove Book
              </button>
            </div>
            <div>
              <CircularProgressbar className="circular" value={66} text="66%" />
            </div>
            <div>
              <button className="updateProgress" type="button">Update Progress</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default BookList;
