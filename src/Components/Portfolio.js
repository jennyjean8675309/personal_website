import React, { Component } from 'react';

class Portfolio extends Component {

  handleOnClick = (e) =>{
    let id = e.currentTarget.id
    let modal = document.getElementById(`${id}-modal`)
    modal.style.display = 'block';
  }

  closeModal = (e) =>{
    let id = e.currentTarget.parentElement.parentElement.parentElement.id
    console.log(id)
    let modal = document.getElementById(`${id}`)
    modal.style.display = 'none';
  }


  render() {
    return (
      <div id='portfolio'>
        <p className='section-heading light' id='left-heading'>cool things I've built</p>
        <div id='button-bar'>
            <button id='musee' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Musee</button>
            <button id='cabinets' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Cabinets of Curiosity</button>
            <button id='rps' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Rock, Paper, Scissors, Fight!</button>
            <button id='piano' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Floor Piano</button>
        </div>

        <div id='musee-modal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={(e)=>this.closeModal(e)}>Close</span>
              <h1 className='modal-heading'>Musee</h1>
              <p className='modal-subheading'>A museum review website for both museum visitors and professionals alike</p>
            </div>
            <div className='modal-body'>
              <iframe title='musee-demo' width="560" height="315" src="https://www.youtube.com/embed/i-6s3h1xDUc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='modal-footer'>
              <h3>How I built it...</h3>
              <p className='built-para'>This was a pair-programmed project built using Ruby on Rails, RESTFUL conventions, and MVC standards. We incorporated user authentication and authorization using bcrypt. We wrote RSpec tests and developed a wide range of analytic data using user-generated information.</p>
              <p className='github-links'><a target='_blank' rel="noopener noreferrer" href='https://github.com/jennyjean8675309/module-two-museum-review-app'>GitHub</a></p>
            </div>
          </div>
        </div>

        <div id='cabinets-modal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={(e)=>this.closeModal(e)}>Close</span>
              <h1 className='modal-heading'>Cabinets of Curiosity</h1>
              <p className='modal-subheading'>A place for users to share their unique perspective of the world through a digital collection</p>
            </div>
            <div className='modal-body'>
              <iframe title='cabinets-demo' width="560" height="315" src="https://www.youtube.com/embed/7uV5yR_zG6c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='modal-footer'>
              <h3>How I built it...</h3>
              <p className='built-para'>For this project I created a backend API using Ruby on Rails. On the frontend, user-generated changes are rendered using React. The frontend is styled using Semantic UI. User validation and encryption of sensitive information was doine using JSON Web Tokens.</p>
              <p className='github-links'><a target='_blank' rel="noopener noreferrer" href='https://github.com/jennyjean8675309/curiosity_cabinet_frontend'>GitHub Frontend</a>{" | "}<a target='_blank' rel="noopener noreferrer" href='https://github.com/jennyjean8675309/curiosity_cabinet_backend'>GitHub Backend</a></p>
            </div>
          </div>
        </div>

        <div id='rps-modal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={(e)=>this.closeModal(e)}>Close</span>
              <h1 className='modal-heading'>Rock, Paper, Scissors, Fight!</h1>
              <p className='modal-subheading'>A card-based twist on the classic game</p>
            </div>
            <div className='modal-body'>
              <iframe title='rps-demo' width="560" height="315" src="https://www.youtube.com/embed/uefyC_FiuBY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='modal-footer'>
              <h3>How I built it...</h3>
              <p className='built-para'>This game was made using Ruby on Rails to create a backend API. The frontend was built using React and Redux to handle multiple state changes. All game flow logic was written using JavaScript. JSON Web Tokens are used to encrypt and store sensitive user data. The frontend was styled using Semantic UI React.</p>
              <p className='github-links'><a target='_blank' rel="noopener noreferrer" href='https://github.com/jennyjean8675309/rps_frontend'>GitHub Frontend</a>{" | "}<a target='_blank' rel="noopener noreferrer" href='https://github.com/jennyjean8675309/rps_backend'>GitHub Backend</a></p>
            </div>
          </div>
        </div>

        <div id='piano-modal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={(e)=>this.closeModal(e)}>Close</span>
              <h1 className='modal-heading'>Floor Piano</h1>
              <p className='modal-subheading'>A great big floor piano!</p>
            </div>
            <div className='modal-body'>
              <iframe title='piano-demo' width="560" height="315" src="https://www.youtube.com/embed/bZyiSHwkw1s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='modal-footer'>
              <h3>How I built it...</h3>
              <p className='built-para'>{"This piano was made using a toy circuit board called a MakeyMakey, a lot of cardboard, a lot of wires, and a lot of duct tape. The piano keys are connected through the MakeyMakey to Scratch (a kids' coding site by MIT). Using Scratch, different keys can be programmed to produce different sounds (like a cat's meow)."}</p>
              <p className='github-links'>See more details on <a target='-blank' rel="noopener noreferrer" href='https://www.instructables.com/id/Floor-Piano/'>Instructables.com</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
