import React, { Component } from 'react';
import './About.scss';
import jack from './assets/images/screenshot.jpg';

class About extends Component {

  render(){
    return (
      <div className="About">
        <div className="About__container">
        <img className="About__image" src={jack} alt="jack"/>

       <div className="About__content">
       {/* <p className="About__text carousel-caption">I am a full stack developer with a passion for delivering applications with intuitive    and elegant designs. While building client side applications with React and Sass is my specialty, I enjoy it all, from creative front end development to pragmatic backend solutions, and everything in between.

        In my spare time, I enjoy playing trumpet, woodworking, and hanging out with my wife and son.</p> */}
      </div>
      </div>
    </div>

    )
  }
}

export default About;