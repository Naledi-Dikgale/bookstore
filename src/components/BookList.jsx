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
            <div className="left-display">
              <div className="book-info">
                <li className="category">{book.category}</li>
                <li className="book-title">{book.title}</li>
                <li className="author">{book.author}</li>
              </div>
              <div className="buttons">
                <button type="button">Comments</button>
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
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="right-display">

              <div className="progress">
                <CircularProgressbar className="circular" value={66} />
                <div className="progress-info">
                  <span className="percentage">
                    {Math.floor(Math.random() * 100)}
                    %
                  </span>
                  <span className="completed">Completed</span>
                </div>
              </div>
              <div className="update">
                <h2 className="chapter">CURRENT CHAPTER</h2>
                <h3 className="chapter-title">Chapter 17</h3>
                <button className="updateProgress" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default BookList;
