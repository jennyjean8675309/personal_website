import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default App;
