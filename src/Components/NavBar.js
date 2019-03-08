import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul id='nav'>
          <li><a className='nav-list' href='#contact'>Where to Find Me</a></li>
          <li><a className='nav-list'href='#blog'>Blog</a></li>
          <li><a className='nav-list' href='#portfolio'>Portfolio</a></li>
          <li><a className='nav-list' href='#about'>About</a></li>
          <li><a className='nav-list' href='#home'>Home</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
