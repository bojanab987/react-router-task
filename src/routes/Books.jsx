import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getBooks } from "./../data";

export default function Books() {
    const books = getBooks();
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >          
          <input
            placeholder="Search books..."
            value={searchParams.get("filter") || ""}
            onChange={event => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {books
            .filter(book => {
              let filter = searchParams.get("filter");
              if(!filter) return true;
              let title=book.title.toLocaleLowerCase();
              return title.startsWith(filter.toLowerCase());
            })
            .map(book => (
            <NavLink className={({isActive})=> isActive ? "green" : ""}
              style={{ display: "block", margin: "1rem 0", textAlign:"left"}}
              to={`/books/${book.bookId}`}
              key={book.bookId}
            >
              {book.title}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    )
}