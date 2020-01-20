import React, { Component } from 'react';
import './TopBar.css';

export default class TopBar extends Component {

  render(){

    console.log(this.props.toggle);

    return(
      <div>
        <nav className="navbar fixed-top topbar">
        <div className="poop">       
        <button type="button" id="sidebarCollapse" className="barButt" onClick={this.props.toggle}><i class="fa fa-bars"></i></button>

            Jenny Zhou
         </div>
        </nav>
      </div>
    )
  }

}
