import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href='#contact'>Contact</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#home'>Home</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
