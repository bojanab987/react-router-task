import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './routes/Books';
import Songs from './routes/Songs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="books" element={<Books />}/>
          <Route path="songs" element={<Songs/>}/>
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


