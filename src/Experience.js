import React, { Component } from 'react';
import './Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className="exp-pg" id="exp-pg">
        <div className="section-title">
          <div className="section-tai">Experience</div>
        </div>
        <div className="exp-content">
          <div className="container">

          <div className="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
              <div className="exp-card paper">
                <div className="comp-title" style={{backgroundColor: "#F5B041"}}>LoanDoc Solutions</div>
                <div className="comp-role">Role: Contract Developer</div>
                <div className="comp-stuff">
                  <li>Worked with CEO to build FrontEnd for internal website</li>
                  <li>Added markup to build pages to spec </li>
                </div>
              </div>
            </div>

          <div className="container" style={{ paddingTop: "30px" }}>
            <div className="exp-card paper">
              <div className="comp-title" style={{backgroundColor: "#76D7C4"}}>Alpha and Omega Computer</div>
              <div className="comp-role">Role: Developer</div>
              <div className="comp-stuff">
                <li>Created shuttle assistant web application in NodeJS</li>
                <li>Overhauled frontend for CMS software</li>
                <li>Developed feature parity to match customer input</li>
                <li>Updated existing frontend for company site</li>
                <li>Deployed static website to AWS S3</li>
              </div>
            </div>
          </div>  

            <div className="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
              <div className="exp-card paper">
                <div className="comp-title">AAY Solutions</div>
                <div className="comp-role">Role: Assistant Developer</div>
                <div className="comp-stuff">
                  <li>Work on freelance projects</li>
                  <li>IDEs: Visual Studio Code, Visual Studio, intelliJ</li>
                  <li>Game Engines: Unity</li>
                  <li>Technologies used: NodeJS, ASP.NET Core II, Ruby on Rails, React Native, EXPO</li>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}