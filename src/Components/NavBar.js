import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href='#contact'>Where to Find Me</a></li>
          <li><a href='#my-blog'>Blog</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#home'>Home</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
