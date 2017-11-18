import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'

import TreatmentStation from './TreatmentStation.jsx'
import AppNav from './AppNav';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.renderer = PIXI.autoDetectRenderer(1366, 768);
        // this.refs.gameCanvas.appendChild(this.renderer.view);
        // // create the root of the scene graph
        // this.stage = new PIXI.Container();
        // this.stage.width = 1366;
        // this.stage.height = 768;
        //
        // var basicText = new PIXI.Text('Basic text in pixi');
        // basicText.x = 30;
        // basicText.y = 90;
        // this.stage.addChild(basicText);
        //
        //
        // var app = new PIXI.Application(1000, 300, {
        //     backgroundColor: 0x00FF00
        // });
        //
        // var circle = PIXI.Sprite.fromImage('/img/cat.png')
        //
        //
        // this.refs.gameCanvas.appendChild(app.view);
        // var basicText = new PIXI.Text('wsaa');
        // basicText.x = 100;
        // basicText.y = 100;
        //
        // basicText.buttonMode = true;
        // basicText.interactive = true;
        //
        // // Moving my circle
        // circle.anchor.set(0.5);
        // circle.x = app.renderer.width / 2;
        // circle.y = app.renderer.height / 2;
        //
        // app.stage.addChild(circle);
        //
        // // circle
        // app.ticker.add(function(delta) {
        //   // just for fun, let's rotate mr rabbit a little
        //   // delta is 1 if running at 100% performance
        //   // creates frame-independent tranformation
        //   circle.rotation += 0.1 * delta;
        // });
        //
        //
        // basicText.on('pointerdown', function(){
        //     // app.stage.getChildAtIndex(0);
        //     basicText.width *= 2;
        //     basicText.height *= 2;
        // });
        // app.stage.addChild(basicText);
        //
        // function abc () {
        //     console.log('hello, world')
        // }

        /*
        this.app = new Pixi.Application(window.innerWidth, window.innerHeight);
        this.gameCanvas.appendChild(this.app.view);
        this.app.start();
        */

        /*
        var cat = PIXI.Sprite.fromImage('img/cat.png');
        cat.anchor.set(0.5);
        cat.x = app.renderer.width / 2;
        cat.y = app.renderer.height / 2;

        this.stage.addChild(cat);
        */
    }


    render() {
        return (
        <div>
        <AppNav />
        <TreatmentStation />
         <div className="game-canvas-container" ref="gameCanvas"></div>
         </div>
        );
    }
}
