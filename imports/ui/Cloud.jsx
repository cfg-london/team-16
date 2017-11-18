import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'

export default class Cloud extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        var app = new PIXI.Application(window.innerWidth, window.innerHeight, {
            backgroundColor: 0xFFFFFF
        });
        this.refs.gameCanvas.appendChild(app.view);


        var sprite = PIXI.Sprite.fromImage('/img/cloud.png');
        sprite.x = 150// app.renderer.width / 2;
        sprite.y = 150 // app.renderer.height / 2;
        app.stage.addChild(sprite);

        var xVelocity = 1;
        var goingLeft = true;

        app.ticker.add(()=> {
            if (goingLeft) {
                sprite.x += xVelocity;
            } else {
                sprite.x -= xVelocity;
            }

            if (sprite.x > 450) {
                goingLeft = false;
            } else if (sprite.x <= 150){
                goingLeft = true;
            }
        });

    }


    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
