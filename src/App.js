import React, { Component } from 'react';
import './App.css';

import Title from './Title';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Navbar from './NavBar';
import Topbar from './TopBar';

import windowSIze from 'react-window-size';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {barActive: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle(e){
    this.setState({
      barActive: !this.state.barActive
    })
  }

  render() {

    var scWid = this.props.windowWidth;


    const className=(this.state.barActive && scWid >= 780) ? "content minus-nav-bar" : "content"  

    return (
      <div className="App">
        <div className="wrapper">
          <Navbar active={this.state.barActive} toggle={this.toggle}/>
          <div id="content" className={className} >
            <Topbar toggle={this.toggle}/>
            <Title/>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default windowSIze(App);
