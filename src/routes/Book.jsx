import { useParams } from "react-router-dom";
import { getBook } from "./../data";

export default function Book(){
    const params=useParams();
    const book = getBook(parseInt(params.bookId, 10));
    return(
        <main style={{ padding: "1rem", textAlign:"left" }}>            
            <h3>Title:  {book.title}</h3>
            <p>Author:  {book.author}</p>
            <p>Genre:  {book.genre}</p>            
    </main>
    )
}