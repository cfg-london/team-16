import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'
import Cloud from './Cloud.jsx'
import AppNav from './AppNav.jsx'
import Station from './Station.jsx'

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
        <Station />
        <div className="game-canvas-container" ref="gameCanvas"></div>
        </div>
        );    }
}
