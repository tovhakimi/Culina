import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import PersonalMenu from './pages/PersonalMenu';
import SpooncularMenu from './pages/SpooncularMenu';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/personal-menu">PersonalMenu</Link>
          <Link to="/spooncular-menu">Spooncular Menu</Link>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personal-menu' element={<PersonalMenu />} />
        <Route path='/spooncular-menu' element={<SpooncularMenu />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;