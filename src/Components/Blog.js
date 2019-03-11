import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div id='blog'>
        <p className='section-heading dark'>Check out my Blog on Medium!</p>

        <div id='blog-background'>
          <blockquote className="embedly-card" data-card-controls="0" data-card-theme="dark"><h4><a href="https://medium.com/@jennyjean8675309">Jennifer Ingram - Medium</a></h4><p>Read writing from Jennifer Ingram on Medium. Software Developer. Art and art history lover. Museum explorer. Total cat lady. Every day, Jennifer Ingram and thousands of other voices read, write, and share important stories on Medium.</p></blockquote>
        </div>

        <div>
          <p className='para'>I write about Harry Potter, the Smurfs, cats (of course), and programming too!</p>
        </div>
      </div>
    )
  }
}

export default Blog
