import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {

  render() {
    return (

      <div className="skills-pg" id="skills-pg">
        <div className="section-title">
          <div className="section-tai">Skills</div>
        </div>

        <div className="skills-content">
          <div className="container">
            <div className="paper skill-card">
              <h3 className="comp-title" style={{ backgroundColor: "rgb(118, 215, 196)" }}>Language</h3>
              <div style={{ paddingLeft: "35px" }}>
                <div className="container">
                  <div className="row skills-row">
                    <SkillBox
                      title="Javascript"
                      img="assets/js.png"
                    />
                    <SkillBox
                      title="Java"
                      img="assets/java.png"
                    />
                    <SkillBox
                      title="C++"
                      img="assets/cpp.png"
                    />
                    <SkillBox
                      title="C#"
                      img="assets/csharp.png"
                    />
                    <SkillBox
                      title="Python"
                      img="assets/python.png"
                    />
                    <SkillBox
                      title="Ruby"
                      img="assets/ruby.png"
                    />
                    <SkillBox
                      title="Typescript"
                      img="assets/ts.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="paper skill-card">
              <h3 className="comp-title" style={{ backgroundColor: "rgb(245, 176, 65)" }}>Frameworks</h3>
              <div style={{ paddingLeft: "35px" }}>
                <div className="container">
                  <div className="row skills-row">
                    <SkillBox
                      title="Rails"
                      img="assets/rails.png"
                    />
                    <SkillBox
                      title="ASP.NET"
                      img="assets/dotnet.png"
                    />
                    <SkillBox
                      title="NodeJS"
                      img="assets/node.png"
                    />
                    <SkillBox
                      title="Spring"
                      img="assets/spring.png"
                    />
                                        <SkillBox
                      title="React Native"
                      img="assets/react.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="paper skill-card">
              <h3 className="comp-title" style={{ backgroundColor: "#f4a460" }}>Database</h3>
              <div style={{ paddingLeft: "35px" }}>
                <div className="container">
                  <div className="row skills-row">
                    <SkillBox
                      title="MongoDB"
                      img="assets/mongo.png"
                    />
                    <SkillBox
                      title="Postgres"
                      img="assets/postgres.png"
                    />
                    <SkillBox
                      title="SQLite"
                      img="assets/sqlite.png"
                    />
                    <SkillBox
                      title="Redis"
                      img="assets/redis.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="paper skill-card">
              <h3 className="comp-title" style={{ backgroundColor: "rgb(118, 215, 196)" }}>Frontend</h3>
              <div style={{ paddingLeft: "35px" }}>
                <div className="container">
                  <div className="row skills-row">
                    <SkillBox
                      title="Bootstrap"
                      img="assets/bootstrap.png"
                    />
                    <SkillBox
                      title="CSS"
                      img="assets/css.png"
                    />
                    <SkillBox
                      title="HTML"
                      img="assets/html.png"
                    />
                    <SkillBox
                      title="React"
                      img="assets/react.png"
                    />
                    <SkillBox
                      title="JQuery"
                      img="assets/jquery.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="paper skill-card">
              <h3 className="comp-title" style={{ backgroundColor: "rgb(245, 176, 65)" }}>Games</h3>
              <div style={{ paddingLeft: "35px" }}>
                <div className="container">
                  <div className="row skills-row">
                    <SkillBox
                      title="Websockets"
                      img="assets/websockets.png"
                    />
                    <SkillBox
                      title="Phaser"
                      img="assets/phaser.png"
                    />
                    <SkillBox
                      title="Unity"
                      img="assets/unity.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="paper skill-card">
              <h3 className="comp-title" style={{ backgroundColor: "#f4a460" }}>Build Tools</h3>
              <div style={{ paddingLeft: "35px" }}>
                <div className="container">
                  <div className="row skills-row">
                    <SkillBox
                      title="Webpack"
                      img="assets/webpack.png"
                    />
                    <SkillBox
                      title="Grunt"
                      img="assets/grunt.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
    );
  }
}

class SkillBox extends Component {

  render() {
    return (
      <div className="skill-box col-4 col-lg-2">
        <div className="skill-title">{this.props.title}</div>
        <div className="skill-pic-container"><img className="skill-pic" src={this.props.img} alt={this.props.title.toString()}></img></div>
      </div>
    );
  }
}