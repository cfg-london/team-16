import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'

import Cloud from './Cloud.jsx'

export default class Map extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // Initialising the PIX canvas
        var app = new PIXI.Application(window.innerWidth, window.innerHeight, {
            transparent: true
        });
        this.refs.gameCanvas.appendChild(app.view);

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        // Initialising the clouds for the brackground
        var numClouds = 5;

        var sprites = new Array(numClouds);
        for (var i = 0; i < numClouds; i ++) {
          sprites[i] = PIXI.Sprite.fromImage('/img/cloud3.png')
        }

        var spritesRight = new Array(numClouds);
        for (var i = 0; i < numClouds; i ++) {
          spritesRight[i] = PIXI.Sprite.fromImage('/img/cloud3.png')
        }

        // Giving the clouds random positions
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

        // Functions to make the clouds move
        var xVelocity = 1;
        var yVelocity = 1;

        var goingLeft = new Array(numClouds);
        var goingRight = new Array(numClouds);

        for (var i = 0; i < numClouds; i ++) {
          goingLeft[i] = true;
          goingRight[i] = true;
        }

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


        // Function to create the circles
        function createCircle(x, y, color) {
            var circle = new PIXI.Graphics();
            circle.lineStyle(2, 0x000000);
            circle.beginFill(color, 1);
            circle.drawCircle(x, y, 35);
            circle.endFill();

            circle.recordX = x;
            circle.recordY = y;
            circle.buttonMode = true;
            circle.interactive = true;

            return circle
        }


        // Global variables used when calculating circle positions
        var NUM_CIRCLES = 8;
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        var ringRadius = 350;
        var textX = centerX - ringRadius + 120;
        var textY = centerY - ringRadius;
        var circles = [];

        // Initialising outer circle frame
        var circle = new PIXI.Graphics();
        circle.lineStyle(5, 0x000000);
        circle.beginFill(0xFFFFFF, 0.2);
        circle.drawCircle(centerX, centerY, ringRadius);
        circle.endFill();

        circle.buttonMode = true;
        circle.interactive = true;

        circle.on('pointerdown', function(){
            console.log('hello');
        });

        app.stage.addChild(circle);

        // 'Database' for the top tips!, eventually will want to move to a db, or pull from an API
        var texts = []
        texts.push('Staying in touch with friends: \n - I got in touch with my friends via Facetime or Skype. That is something I really enjoyed \n - See if your friends can visit you \n - Online games');
        texts.push(180);
        texts.push('Keeping active: \n - I kept myself fit by using the Wii fit or the exercise bike \n - Get out as much as you can');
        texts.push(250);
        texts.push('Coping with treatment: \n - You can feel different when you\'re on medication. I felt like I was a different person');
        texts.push(250);
        texts.push('Entertainment in hospital: \n - Read a book \n - Hospital school can be fun \n - Do art or write about what is happening \n - Keep a diary \n - Use hospital as an opportunity to make friends');
        texts.push(180);
        texts.push('Share what\'s happening: \n - Tell people things you are struggling with \n - Tell a teacher if you are worried about bullies \n - Keep close to your family \n - If people ask just tell them, don’t keep it hidden \n - Ask someone if you don’t understand something');
        texts.push(140);
        texts.push('Keeping up with school work: \n - Get homework from friends and teachers \n - Get your nurse to come into school and talk');
        texts.push(250);
        texts.push('Staying positive: \n - Be yourself \n - Don\'t let anything hold you back \n - Try to laugh \n - Keep a journal or diary to look back on and see what you have done \n - Try things you haven\'t tried before');
        texts.push(140);
        texts.push('CLIC Sargent says: \n - Ask our experts \n - Read stories like yours \n - Join CYPAG \n - Read Shout Out! magazine \n - Share with your friends')
        texts.push(210);

        // Draws the side circles in their original colour
        function resetCircles() {
          var colors = [0xcc66ff, 0xff99ff, 0xff5050, 0xff9966, 0xffff99, 0x99ff99, 0x66ffff, 0x4d94ff];
          for (var i = 0; i < NUM_CIRCLES; i++) {
              var angle = (i+1) * 2 * Math.PI/NUM_CIRCLES;
              var x = centerX + Math.cos(angle) * ringRadius;
              var y = centerY + Math.sin(angle) * ringRadius;

              var tem = createCircle(x, y, colors[i]);
              circles.push(tem);
              app.stage.addChild(tem);
          }
        }

        // Text stlye for tips
        var style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fill: ['#E510E8'], // gradient
            stroke: '#4a1850',
            strokeThickness: 2,
            letterSpacing: 1,
            dropShadow: false,
            wordWrap: true,
            wordWrapWidth: 480
        });

        resetCircles();

        // Initial text
        var richText = new PIXI.Text('Click the circles \n   for Top Tips \n during treatment', style);
        richText.x = textX + 100;
        richText.y = textY + 300;
        app.stage.addChild(richText);

        var count = 0;

        // Adding function so that each circle changes colour and prints the corresponding tip when clicked
        console.log(circles);
        circles.forEach(function(item) {
            item.on('pointerdown', function() {
                item.clear();
                item.lineStyle(2, 0x000000);
                item.beginFill(0x00cc66, 1);
                item.drawCircle(item.recordX, item.recordY, 35);
                item.endFill();
                richText.destroy(true);
                richText = new PIXI.Text(texts[2*count], style);
                richText.x = textX;
                richText.y = textY + texts[2*count+1];

                if(count > 8) {
                  richText = new PIXI.Text('Click the circles \n  for Top Tips!', style);
                  richText.x = textX + 100;
                  richText.y = textY + 300;
                  count = -1;
                  resetCircles();
                }
                app.stage.addChild(richText);
                count++;
            });
        });

        function createImageFromPath(dir, x, y) {
            var image = PIXI.Sprite.fromImage('/img/mapPieces/'+dir);
            image.x = x;
            image.y = y;
            image.buttonMode = true;
            image.interactive = true;

            image.on('pointerdown', function(){
                console.log('hello');
            });

            app.stage.addChild(image);
        }

    }

    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
