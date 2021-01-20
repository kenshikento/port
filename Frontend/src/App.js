import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navibar';
import { BrowserRouter , Route }  from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route exact path='/' component = { Home }/>
      <Route path='/portfolio' component = { Portfolio }/>
      <Route path='/contact' component = { Contact }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
