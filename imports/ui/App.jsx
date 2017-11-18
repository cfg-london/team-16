import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'
import Cloud from './Cloud.jsx'
import AppNav from './AppNav.jsx'
import Station from './Station.jsx'
import TreatmentStation from './TreatmentStation.jsx'
import Map from './Map.jsx'


export default class App extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {
    }

    scrollToTop() {
      window.scrollTo(0, 0);
    }

    render() {
      // Retuning the components for the main screen
        return (
        <div>
        <AppNav />
        <Cloud />
        <div class="paddingSpace"/>
        <center><Station /></center>
        <button onClick={this.scrollToTop} style={{margin:"auto", display:"block"}}> Continue your journey</button>
        <div class="paddingSpace"/>
        <Map />
        <button onClick={this.scrollToTop} style={{margin:"auto", display:"block"}}> Continue your journey</button>
        <div class="paddingSpace"/>
        <center><TreatmentStation /></center>
        <button onClick={this.scrollToTop} style={{margin:"auto", display:"block"}}> Continue your journey</button>
        <div class="paddingSpace"/>
       <div className="game-canvas-container" ref="gameCanvas"></div>
         </div>
        );
    }
}
