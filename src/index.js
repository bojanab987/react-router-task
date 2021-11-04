import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './routes/Books';
import Songs from './routes/Songs';
import Book from './routes/Book';
import Song from './routes/Song';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="books" element={<Books />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a book to see details</p>
                </main>
              }
            />
            <Route path=":bookId" element={<Book />}/>
          </Route>
          <Route path="songs" element={<Songs/>}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a song to see details</p>
                </main>
              }
            />
            <Route path=":songId" element={<Song />}/>
          </Route>
          <Route
            path="*"
            element={
            <main style={{ padding: "1rem" }}>
              <p>There's no results!</p>
            </main>
          }
        />
        </Route>
      </Routes>      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


