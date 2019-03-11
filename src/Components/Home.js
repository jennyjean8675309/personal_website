import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <p className='intro'>{"Hi. I'm Jenny."}</p>
        <p className='intro' id='line-two'>I don't like piña</p>
        <p className='intro' id='line-three'>coladas or getting caught</p>
        <p className='intro' id='line-four'>in the rain. I do like</p>
        <p className='intro' id='line-five'>to build cool things</p>
        <p className='intro' id='line-six'>and learn new stuff.</p>
        <img alt='Jenny' id='selfie' src={require('../Images/cropped_pic.png')}></img>
      </div>
    )
  }
}

export default Home
