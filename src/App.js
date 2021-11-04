import './App.css';
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Router ➾ In Action 🙂!</h1>   
      <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }} 
        >
          <Link to="/">Home</Link> | {" "}
          <Link to="/books">Books</Link> | {" "}
          <Link to="/songs">Songs</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
