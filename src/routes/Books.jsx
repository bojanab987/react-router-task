import { Link, Outlet } from "react-router-dom";
import { getBooks } from "./../data";

export default function Books() {
    const books = getBooks();
    return (
        <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {books.map(book => (
            <Link
              style={{ display: "block", margin: "1rem 0", textAlign:"left"}}
              to={`/books/${book.bookId}`}
              key={book.bookId}
            >
              {book.title}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    )
}