import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import headshot from './assets/images/headshot.jpg';
import './Navbar.scss';

class Navbar extends Component {

  render(){

    return(

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item disable">
          <NavLink className="nav-link brand" to="/">SteveoSoftware</NavLink>
          </li>

            <li className="nav-item link home-link">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item link">
                <NavLink exact to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item link">
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
        </ul>
    </div>
    <div className="mx-auto order-0">

    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/steveosoftware">GitHub</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/steve-oconnor-927a701bb/">LinkedIn</a>
            </li>
        </ul>
    </div>
</nav>


    )
  }
}
export default Navbar;