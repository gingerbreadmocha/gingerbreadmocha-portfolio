import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-pg" id="contact-pg">
        <div className="section-title">
          <div className="section-tai">Contact me</div>
        </div>
        <div className="contact-content">
          <div className="contact-stuff"><i class="fa fa-envelope icon"></i> jennyzhou0302@gmail.com</div>
          <div className="contact-stuff"><i class="fa fa-github icon"></i><a className = "link" href="https://github.com/gingerbreadmocha"> github.com/gingerbreadmocha/</a></div>
          <div className="contact-stuff"><i class="fa fa-linkedin icon"><a className = "link" href="https://www.linkedin.com/in/jenny-zhou-514662155/"> linkedin.com/in/jenny-zhou-514662155</a></i></div>
          <div className="contact-stuff"><i class="fa fa-file icon"></i><a className="link" href="https://docs.google.com/document/d/1fjzLJa0Zxt8p1dKfMkfugs3-IYvQIsDztVQ7GlIo8EM/edit?usp=sharing"> Jenny's resume! </a></div>
        </div>
      </div>
    );
  }
}