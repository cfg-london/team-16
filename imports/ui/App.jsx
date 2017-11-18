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
        return (
        <div>
        <AppNav />
        <Cloud />
        <center><Station /></center>
        <button onClick={this.scrollToTop} style={{margin:"auto", display:"block"}}> Continue your journey</button>
        <Map />
        <button onClick={this.scrollToTop} style={{margin:"auto", display:"block"}}> Continue your journey</button>
        <center><TreatmentStation /></center>
        <button onClick={this.scrollToTop} style={{margin:"auto", display:"block"}}> Continue your journey</button>
         <div className="game-canvas-container" ref="gameCanvas"></div>
         </div>
        );
    }
}
