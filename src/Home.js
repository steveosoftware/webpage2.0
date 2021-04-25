import React, { Component } from 'react';
import Zenquote from './Zenquote';
import sky from './assets/images/keyboard.mp4';
import './Home.scss';

class Home extends Component {

  render(){
    return (
      <div className="Home">
        <div className="Home-video">
          <video className="Home-video__content" autoPlay loop muted>
          <source src={sky} type="video/mp4"/>

          </video>
        </div>
        <Zenquote />
      </div>
    )
  }
}

export default Home;