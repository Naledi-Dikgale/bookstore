function BookForm() {
  return (
    <div>
      <h2>Add New Book</h2>
      <form action="submit">
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
