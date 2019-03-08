import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <p id='intro'>Hi. My name is Jenny. I don't like piña coladas or getting caught in the rain. I do like to build cool things and learn new stuff.</p>
        <img alt="A picture of Jenny" id='selfie' src={require('../Images/web_pic.jpg')}></img>
      </div>
    )
  }
}

export default Home
