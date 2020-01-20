import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-pg" id="about-pg">
        <div className="section-title">
          <div className="section-tai">About me</div>
        </div>
        <div className="about-content">
          <div className="about-facts">
            <div className="about-quote">
              Hello, my name is Ziling (Jenny) Zhou. I studied mathematics and statistics (undergrad) at UCSB and completed my Master's at NYU for Computer Science.
            </div>
            <div>
              As a developer, I have built products for many clients to their specifications and beyond. Throughout my career, I have mostly worked on web applications, games, and mobile apps. Recently, my favorite technology is React Native + Node js. I'm currently located in Los Angeles County, California.  
            </div>
          </div>
        </div>
      </div>
    );
  }
}