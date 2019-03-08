import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
