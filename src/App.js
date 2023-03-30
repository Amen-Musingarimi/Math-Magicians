import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/QuoteApi';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <Link className="navLinks" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLinks" to="/calculator">
              Calculator
            </Link>
          </li>
          <li>
            <Link className="navLinks" to="/quotes">
              Quotes
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
