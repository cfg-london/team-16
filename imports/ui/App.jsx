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


    render() {
        return (
        <div>
        <AppNav />
        <Cloud />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center><Station /></center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center><TreatmentStation /></center>
        <Map />
         <div className="game-canvas-container" ref="gameCanvas"></div>
         </div>
        );
    }
}
