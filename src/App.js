import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
