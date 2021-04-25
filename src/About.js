import React, { Component } from 'react';
import './About.scss';
import screenshot from './assets/images/screenshot.jpg';

class About extends Component {

  render(){
    return (
      <div className="About">
        <div className="About__container">
        <img className="About__image" src={screenshot} alt="jack"/>

       <div className="About__content">
       {/* <p className="About__text carousel-caption">I am a full stack developer with a passion for delivering applications with intuitive    and elegant designs. While building client side applications with React and Sass is my specialty, I enjoy it all, from creative front end development to pragmatic backend solutions, and everything in between.

        In my spare time, I enjoy playing trumpet, woodworking, and hanging out with my wife and son.</p> */}
      </div>
      </div>
      <div>
      <p className="About__email">mrsteveoconnor@gmail.com</p>
      <p className="About__email">562.508.5943</p>
      </div>

    </div>

    )
  }
}

export default About;