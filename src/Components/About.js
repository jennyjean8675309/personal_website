import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <div>
          <p className='section-heading dark'>about me</p>
          <p className='section-subheading'>{"I'm a software developer. I like art. I like museums. I like cats."}</p>
        </div>
        <div>
          <p className='para'>{"I love to learn about the things that a lot of us find intimidating (like rocket science or programming), because I've found that all things are understandable if they're presented in the right way. We live in a pretty fascinating world... and I'm curious. I'm a life-long learner who loves to tackle interesting challenges and see what I can build."}</p>
          <p className='para'>{"I've taught art at an elementary school in Spain and I've written AP art history curriculum for high school students. I worked at a NASA visitors center where I learned all about the Saturn V (the rocket that sent Apollo astronauts to the moon) and made a giant floor piano. If there's been one theme throughout my life it's that I LOVE to create things - especially things that are fun, beautiful, help people deepen their understanding of the world, and/or enrich their lives."}</p>
        </div>
        <div className='pic-bar'>
          <div className='item'>
            <img alt='computer screen showing code' className='square-pic' src={require('../Images/code_square.jpg')}></img>
          </div>
          <div className='item'>
            <img alt='visit to Rocket City, USA' className='square-pic' src={require('../Images/rocket_square.jpg')}></img>
          </div>
          <div className='item'>
            <img alt='weird cat' className='square-pic' src={require('../Images/juju_square.jpg')}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default About
