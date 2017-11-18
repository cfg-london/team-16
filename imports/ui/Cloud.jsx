import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'

export default class Cloud extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        var app = new PIXI.Application(window.innerWidth, window.innerHeight, {
            transparent: true
        });
        this.refs.gameCanvas.appendChild(app.view);


        //var sprite = PIXI.Sprite.fromImage('/img/cloud2.png');

        var numClouds = 5;

        var sprites = new Array(numClouds);
        for (var i = 0; i < numClouds; i ++) {
          sprites[i] = PIXI.Sprite.fromImage('/img/cloud2.png')
        }


        for (var i = 0; i < numClouds; i ++) {
          var randy = Math.random()*app.renderer.width / 2;
          var randx = Math.random()*app.renderer.width / 2;

          sprites[i].x =  randx;
          sprites[i].y =  randy;
          app.stage.addChild(sprites[i]);
        }



        var xVelocity = 1;

        var goingLeft = new Array(numClouds);

        for (var i = 0; i < numClouds; i ++) {
          goingLeft[i] = true;
        }

        //var goingLeft = true;

        app.ticker.add(()=> {
          for (var j = 0; j < numClouds; j ++) {
            if (goingLeft[j]) {
                sprites[j].x += xVelocity;
            } else {
                sprites[j].x -= xVelocity;
            }

            if (sprites[j].x > 450) {
                goingLeft[j] = false;
            } else if (sprites[j].x <= 150){
                goingLeft[j] = true;
            }
          }
        });

    }



    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
