import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import ForwardLogo from './assets/Forward.svg';
import About from './pages/About';
import Login from './pages/Login';


import './App.css';

function App() {
  // ...

  return (
    <div className="">
      <Router>
        <nav>
          {/* Add your navigation links here */}
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to ="/login">Login</Link>
          {/* <Link to="/Privacy">Privacy</Link>
          <Link to="/Terms">Terms</Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path ="/Privacy" element={<Privacy />} />
          <Route path ="/Terms" element={<Terms />} /> */}
        </Routes>
      </Router>

      {/* ... */}
    </div>
  );
}


export default App;
