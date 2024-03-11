import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Components
import Home from './pages_proj1/Home';
import About from './pages_proj1/About'
import Vans from './pages_proj1/Vans' 

function App() {
  return (
    <BrowserRouter>
    <header>
      <Link className="site-logo" to={"/"}>#VANLIFE</Link>
      <nav>
        <Link to={"/about"}>About</Link>
        <Link to={"/vans"}>Vans</Link>
      </nav>
    </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
