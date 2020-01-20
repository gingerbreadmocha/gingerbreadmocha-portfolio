import React, { Component } from 'react';
import './Project-Box.css';

export default class ProjectBox extends Component {
  constructor(props) {
    super(props);
    this.state = { desShow: true};
    this.activateSecretButton = this.activateSecretButton.bind(this);
  }

  activateSecretButton() {
    console.log('U CLICKED THE SECRET BUTTON- PREPARE URSELF');
    this.setState({ desShow: !this.state.desShow});
  }



  render() {

    return (
      <div className="col-12 col-md-6 col-lg-4">
      <div className="project-box">
        <div className="proj-title" style={{backgroundColor:this.props.color}}>{this.props.title}<i onClick={this.activateSecretButton} className="fa fa-star star-icon" id={this.props.pop ? 'popcorn' : ''} style={{color:this.props.star}}></i></div>
        <div className="proj-dcrp">
          <div className = "proj-text"><p className={"proj-des " + (this.state.desShow ? 'show' : 'hidden')}>{this.props.descrp}</p>
          <p className={"proj-tech " + (this.state.desShow ? 'hidden' : 'show')}>{this.props.tech}</p></div>
          <p className="pic-container" style={{backgroundImage: `url(${this.props.img})`, backgroundSize: "cover"}}></p>
          <p>{this.props.link && <a class="fa fa-external-link link-icon" href={this.props.link}> </a>}</p>
        </div>
        </div>
      </div>
    );
  }
}