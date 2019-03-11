import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id='contact'>
        <p className='section-heading light'>where you can find me</p>

        <div id='contact-box'>
          <div className='contact-block'>
            <p id='contact-heading'>Say Hello</p>
            <p className='contact-para'>Drop me a line at:</p>
            <p className='contact-para'><a href='mailto:jennyjean8675309@gmail.com'>jennyjean8675309@gmail.com</a></p>
            <p className='contact-para'><a target='_blank' rel="noopener noreferrer" href={require('../Images/J_Ingram_resume.pdf')}>Download my resume</a></p>
            <p className='contact-para'>{"I'm based in the D.C. Metro Area"}</p>
          </div>

          <div id='badge' className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="jenny-j-ingram"><a target='_blank' rel="noopener noreferrer" className="LI-simple-link" href='https://www.linkedin.com/in/jenny-j-ingram?trk=profile-badge'>Jennifer Ingram</a></div>

          <div className='contact-block'>
            <div id='github-block'>
              <img alt='github octocat' src={require('../Images/GitHub-Mark-Light-64px.png')}></img>
              <img alt='github logo' width='200px' src={require('../Images/GitHub_Logo_White.png')}></img>
            </div>
            <div>
              <div id='github-profile'>
                <div>
                  <img alt='github avatar' width='40px' src={require('../Images/github_avatar.png')}></img>
                </div>
                <div>
                  <p className='contact-para' id='username'><a target='_blank' rel="noopener noreferrer" href='https://github.com/jennyjean8675309'>jennyjean8675309</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
