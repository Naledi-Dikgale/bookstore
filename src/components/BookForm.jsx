import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const BookForm = () => {
  const [formState, setFormState] = useState({ title: '', author: '' });
  const { books } = useSelector((state) => state.books);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      item_id: `item${books.length + 1}`
    }));
  }

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author } = formState;
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(addBook(formState));
      setFormState({ title: '', author: '' });
    }
  }

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="submit">
        <input type="text" className="title" placeholder="Book title" onChange={handleChange} name="title" value={formState.title} />
        <input type="text" className="author" placeholder="Author" onChange={handleChange} name="author" value={formState.author} />
        <button type="submit" className="addBook">Add Book</button>
      </form>
    </>
  );
}

export default BookForm;
