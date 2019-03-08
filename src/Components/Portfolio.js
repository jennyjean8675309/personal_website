import React, { Component } from 'react';

class Portfolio extends Component {

  handleOnClick = (e) =>{
    let id = e.currentTarget.id
    let modal = document.getElementById(`${id}-modal`)
    modal.style.display = 'block';
  }

  closeModal = (e) =>{
    let id = e.currentTarget.parentElement.parentElement.id
    let modal = document.getElementById(`${id}`)
    modal.style.display = 'none';
  }


  render() {
    return (
      <div id='portfolio'>
        <p class='section-heading light'>cool things I've built</p>
        <div id='button-bar'>
          <div>
            <button id='musee' class='project-button' onClick={(e)=>this.handleOnClick(e)}>Musee</button>
          </div>
          <div>
            <button id='cabinets' class='project-button' onClick={(e)=>this.handleOnClick(e)}>Cabinets of Curiosity</button>
          </div>
          <div>
            <button id='rps' class='project-button' onClick={(e)=>this.handleOnClick(e)}>Rock, Paper, Scissors, Fight!</button>
          </div>
        </div>

        <div id='musee-modal' class='modal'>
          <div class='modal-content'>
            <span class='close' onClick={(e)=>this.closeModal(e)}>Close</span>
            <p>Musee - a museum review website for both museum visitors and professionals alike</p>
          </div>
        </div>

        <div id='cabinets-modal' class='modal'>
          <div class='modal-content'>
            <span class='close' onClick={(e)=>this.closeModal(e)}>Close</span>
            <p>Cabinets of Curiosity - a place for users to share their unique perspective of the world through a digital collection</p>
          </div>
        </div>

        <div id='rps-modal' class='modal'>
          <div class='modal-content'>
            <span class='close' onClick={(e)=>this.closeModal(e)}>Close</span>
            <p>Rock, Paper, Scissors, Fight! - a card-based twist on the classic game</p>
          </div>
        </div>


      </div>
    )
  }
}

export default Portfolio
