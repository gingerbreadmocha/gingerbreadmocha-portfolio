import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component{
  render(){

    return(
      <div className="title-pg" id="title-pg">

        <div className="title-quote"> Jenny Zhou <u style={{ textDecorationColor: '#F5B041'}}> Software Engineer </u></div>
      </div>
    );
  }
}