import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {

  render() {

/*     if (this.props.active) {
      var divStyle = {
        margin: "0"
      }
    } else {
      var divStyle = {
        margin: "-250px"
      }
    } */

    const className=(this.props.active) ? "content" : "content  moo-moo";  

    return (
      <div>
        <nav id="sidebar" ref="sidebar" className={className}>

          <div id="bar-title" className="bar-title">
            Sections
            <button type="button" id="sidebarCollapse" className="toggleBar" onClick={this.props.toggle}><i class="fa fa-bars" style={{paddingLeft: "15px"}}></i></button>
          </div>

          <ul className="list-unstyled components">
            <li><a href="#title-pg" className="nav-link">Home</a></li>
            <li><a href="#about-pg" className="nav-link">About</a></li>
            <li><a href="#exp-pg" className="nav-link">Experience</a></li>
            <li><a href="#projects-pg" className="nav-link">Projects</a></li>
            <li><a href="#skills-pg" className="nav-link">Skills</a></li>
            <li><a href="#contact-pg" className="nav-link">Contact Me</a></li>
          </ul>

          <img className="bar-img" src="assets/fish1.png" alt="clouds"></img>
        </nav>

      </div>
    );

  }

}