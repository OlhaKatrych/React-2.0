import Product from "./Product/Product";
import booksArr from "../favouriteBooks.json";
import BookList from "./BookList/BookList";

function App() {
  const numArr = [1, 2, 3];
  return (
    <div>
      <p>Hello, baby!</p>
      <Product title="The best Woman!" />
      <h2>The books of the week</h2>
      <BookList books={booksArr} />
    </div>
  );
}

export default App;
