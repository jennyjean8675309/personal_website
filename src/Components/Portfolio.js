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
        <p className='section-heading light'>cool things I've built</p>
        <div id='button-bar'>
          <div>
            <button id='musee' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Musee</button>
          </div>
          <div>
            <button id='cabinets' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Cabinets of Curiosity</button>
          </div>
          <div>
            <button id='rps' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Rock, Paper, Scissors, Fight!</button>
          </div>
          <div>
            <button id='piano' className='project-button' onClick={(e)=>this.handleOnClick(e)}>Floor Piano</button>
          </div>
        </div>

        <div id='musee-modal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={(e)=>this.closeModal(e)}>Close</span>
              <h1>Musee</h1>
            </div>
            <div className='modal-body'>
              <p>A museum review website for both museum visitors and professionals alike</p>
              <iframe title='musee-demo' width="560" height="315" src="https://www.youtube.com/embed/i-6s3h1xDUc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='modal-footer'>
              <h3>Stack...</h3>
            </div>
          </div>
        </div>

        <div id='cabinets-modal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={(e)=>this.closeModal(e)}>Close</span>
              <h1>Cabinets of Curiosity</h1>
            </div>
            <div className='modal-body'>
              <p>A place for users to share their unique perspective of the world through a digital collection</p>
              <iframe title='cabinets-demo' width="560" height="315" src="https://www.youtube.com/embed/7uV5yR_zG6c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='modal-footer'>
              <h3>Stack...</h3>
            </div>
          </div>
        </div>

        <div id='rps-modal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' onClick={(e)=>this.closeModal(e)}>Close</span>
              <h1>Rock, Paper, Scissors, Fight!</h1>
            </div>
            <div className='modal-body'>
              <p>Rock, Paper, Scissors, Fight! - a card-based twist on the classic game</p>
              <iframe title='rps-demo' width="560" height="315" src="https://www.youtube.com/embed/uefyC_FiuBY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='modal-footer'>
              <h3>Stack...</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
