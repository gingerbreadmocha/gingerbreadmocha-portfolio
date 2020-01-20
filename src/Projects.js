import React, { Component } from 'react';
import './Projects.css';
import ProjectBox from './Project-Box.js';
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';

export default class Projects extends Component {

  constructor(props){
    super(props);
    this.state = {
      pop: false
    }
    this.popToggle = this.popToggle.bind(this);
  }
  componentDidMount(){
    console.log('asdfffd');
    this.setState({pop: true});
  }

  popToggle(){
    this.setState({pop: false})
  }

  render() {

    return (

      <div className="projects-pg mb-5" id="projects-pg">
        <div className="section-title proj-tai">
          <div className="section-tai">Projects</div>
        </div>
        <div className="projects-content container">
          <div className="container">
            <div className="row">

             <Popover placement="top" isOpen={this.state.pop} target="popcorn" toggle={this.toggle}>
          <PopoverHeader>Surprise!
            <i className="fa fa-window-close pop-close" onClick={this.popToggle}></i>
          </PopoverHeader>
          <PopoverBody>Click the star for a surprise.</PopoverBody>
          </Popover>

          <ProjectBox
                title="Kantan-desu"
                descrp="Anime backlog app"
                tech="Technology used: React Native, EXPO"
                img="assets/kantan.png"
                link="https://play.google.com/store/apps/details?id=com.hamsterhole.kantandesu&hl=en_US"
                star="#5DADE2"
                pop={true}
              />

            <ProjectBox
                title="Handy Mason"
                descrp="Independent contractor project management/invoicing app"
                tech="Technology used: React Native"
                img="assets/handy.jpg"
                star="#FAD7A0"
                color="#F5B041"
                pop={true}
              />

              <ProjectBox
                title="Piske's Recommendations"
                descrp="Piske recommends you anime based off your search."
                tech="Technology used: NodeJS, Express, Redis, React, Bootstrap, JQuery, Webpack, Babel, Bluebird"
                img="assets/pisuke-recs.png"
                link="https://piskes-anime.herokuapp.com"
                star="rgb(250, 215, 160)"
                color="#76D7C4"
                pop={true}
              />

              <ProjectBox
                title="Hamsterbux"
                descrp="A website where users can earn, exchange and use the virtual currency, Hamsterbux."
                tech="Technology used: Ruby On Rails, Bootstrap, Postgres"
                img="assets/hamsterbux.png"
                link="https://hamster-bux.herokuapp.com"
                star="#FAD7A0"
                color="#F5B041"
              />

              <ProjectBox
                title="Captain Jones"
                descrp="Browser, mobile responsive puzzle game. Play as a pirate to find keys to pass levels."
                tech="Technology used: Phaser.JS, HTML 5, Typescript"
                img="assets/pirate.png"
                link="https://game-host.herokuapp.com/pirate-dungeon/"
                star="#5DADE2"
              />

              <ProjectBox
                title="Froggee High Scores"
                descrp="High scores system made for Yepi game contest."
                tech="Technology used: Node.js, Express, Postgres, Bootstrap, EaselJS"
                img="assets/froggeee.png"
                link="https://game-host.herokuapp.com/frog/"
                star="#76D7C4"
                color="#F5B041"
              />

              <ProjectBox
                title="Article Visualizer"
                descrp="Finds/collects info on all the words in an article."
                tech="Technology used: Node.js, Express, Postgres, Bootstrap, EaselJS"
                img="assets/article.png"
                link="http://mochi-waffle.herokuapp.com/article/"
                star="#5DADE2"
              />

              <ProjectBox
                title="PepeBoards"
                descrp="A web forum. :)"
                tech="Technology used: ASP.NET Core II, Identity, Bootstrap, MsSQL"
                img="assets/pepeb.png"
                link="https://github.com/gingerbreadmocha/pepe-boards"
                star="rgb(250, 215, 160)"
                color="#76D7C4"
              />

              <ProjectBox
                title="Cat.IO"
                descrp="Online multiplayer browser game. Play as a cat and defeat your enemies! Based on Agar.IO."
                tech="Technology used:  Node.js, Websockets, Phaser.js, Bootstrap"
                img="assets/catio.png"
                star="#FAD7A0"
              />

              <ProjectBox
                title="Blackjack"
                descrp="Blackjack game."
                tech="Technology used: React"
                img="assets/blackjack.png"
                link="http://mochi-waffle.herokuapp.com/blackjack/"
                star="#FAD7A0"
                color="#76D7C4"
              />

              <ProjectBox
                title="Jojo Defense"
                descrp="Phaser defense game."
                tech="Technology used: Phaser"
                img="assets/article.png"
                link="http://mochi-waffle.herokuapp.com/article/"
                star="#5DADE2"
                color="#F5B041"
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}