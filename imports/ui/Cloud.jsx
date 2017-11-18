import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'

export default class Cloud extends Component {

    constructor(props) {
        super(props);
    }



    componentDidMount() {

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        var app = new PIXI.Application(window.innerWidth, window.innerHeight, {
            transparent: true
        });
        this.refs.gameCanvas.appendChild(app.view);


        //var sprite = PIXI.Sprite.fromImage('/img/cloud2.png');

        var numClouds = 5;

        var sprites = new Array(numClouds);
        for (var i = 0; i < numClouds; i ++) {
          sprites[i] = PIXI.Sprite.fromImage('/img/cloud3.png')
        }

        var spritesRight = new Array(numClouds);
        for (var i = 0; i < numClouds; i ++) {
          spritesRight[i] = PIXI.Sprite.fromImage('/img/cloud3.png')
        }

        for (var i = 0; i < numClouds; i ++) {
          var randy = Math.random()*app.renderer.height;
          var randx = Math.random()*app.renderer.width;

          sprites[i].x =  randx;
          sprites[i].y =  randy;
          app.stage.addChild(sprites[i]);
        }

        var diff = 10;
        for (var i = 0; i < numClouds; i++) {
            var randy = Math.random()*app.renderer.height;
            var randx = app.renderer.width - diff - getRandomInt(10, 40);
            spritesRight[i].x = randx
            spritesRight[i].y = randy
            app.stage.addChild(spritesRight[i]);
            diff += 10;
        }


        var xVelocity = 1;
        var yVelocity = 1;

        var goingLeft = new Array(numClouds);
        var goingRight = new Array(numClouds);

        for (var i = 0; i < numClouds; i ++) {
          goingLeft[i] = true;
          goingRight[i] = true;
        }

        //var goingLeft = true;

        var leftBound = 100;
        var RightBound = app.renderer.width / 2;

        var secondLeftBound = app.renderer.width * 0.65;
        var secondRightBound = app.renderer.width - 100;

        app.ticker.add(()=> {
          for (var j = 0; j < numClouds; j ++) {
            if (goingLeft[j]) {
                sprites[j].x += xVelocity;
            } else {
                sprites[j].x -= xVelocity;
            }

            if (goingRight[j]) {
                spritesRight[j].x -= yVelocity;
            } else {
                spritesRight[j].x += yVelocity;
            }

            if (spritesRight[j].x < secondLeftBound) {
                goingRight[j] = false;
            } else if (spritesRight[j].x > secondRightBound){
                goingRight[j] = true;
            }

            if (sprites[j].x > RightBound) {
                goingLeft[j] = false;
            } else if (sprites[j].x <= leftBound){
                goingLeft[j] = true;
            }
          }
        });

        var diffX = 500;
        var diffY = 70;

        function createImageFromPath(dir, x, y) {
            var image = PIXI.Sprite.fromImage('/img/mapPieces/'+dir);
            image.x = x + diffX;
            image.y = y + diffY;
            image.scale.x = 0.5;
            image.scale.y = 0.5;
            image.buttonMode = true;
            image.interactive = true;
            if (image.x - diffX <= 10) {
                image.on('pointerdown', function(){
                    window.scrollTo(0, 1200);
                });
            } else if (image.x - diffX <= 265) {
                image.on('pointerdown', function(){
                    window.scrollTo(0, 800);
                });
            } else if (image.x - diffX <= 265+143) {
                image.on('pointerdown', function(){
                    window.scrollTo(0, 1700);
                });
            }
            app.stage.addChild(image);
        }

        createImageFromPath('piece1.png', 10, 10);
        createImageFromPath('piece2.png', 265, 26);
        createImageFromPath('piece3.png', 265+143, 26+120);
        createImageFromPath('piece4.png', 265+143-290, 26+120+40);
        createImageFromPath('piece5.png', 265+143-290-255, 26+120+40+68);
        createImageFromPath('piece6.png', 265+143-290-255+50+50+42, 26+120+40+68+250);
    }



    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
