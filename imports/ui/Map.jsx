import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'

export default class Map extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        var app = new PIXI.Application(window.innerWidth, window.innerHeight, {
            backgroundColor: 0xFFFFFF
        });

        this.refs.gameCanvas.appendChild(app.view);

        // Moving my circle
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

        var NUM_CIRCLES = 8;
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        var ringRadius = 350;
        var textX = centerX - ringRadius + 120;
        var textY = centerY - ringRadius;


        var circle = new PIXI.Graphics();
        circle.lineStyle(5, 0x000000);
        circle.beginFill(0xFFFFFF, 0.5);
        circle.drawCircle(centerX, centerY, ringRadius);
        circle.endFill();

        circle.buttonMode = true;
        circle.interactive = true;

        circle.on('pointerdown', function(){
            console.log('hello');
        });

        app.stage.addChild(circle);

        var circles = [];
        var colors = [0xcc66ff, 0xff99ff, 0xff5050, 0xff9966, 0xffff99, 0x99ff99, 0x66ffff, 0x4d94ff];
        for (var i = 0; i < NUM_CIRCLES; i++) {
            var angle = (i+1) * 2 * Math.PI/NUM_CIRCLES;
            var x = centerX + Math.cos(angle) * ringRadius;
            var y = centerY + Math.sin(angle) * ringRadius;

            var tem = createCircle(x, y, colors[i]);
            circles.push(tem);
            app.stage.addChild(tem);
        }

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

        var richText = new PIXI.Text('Click the circles \n  for Top Tips!', style);
        richText.x = textX + 100;
        richText.y = textY + 300;

        app.stage.addChild(richText);

        var count = 0;

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

        createImageFromPath('piece1.png', 10, 10);
        createImageFromPath('piece2.png', 40, 40);
        createImageFromPath('piece3.png', 80, 80);
        createImageFromPath('piece4.png', 120, 120);
        createImageFromPath('piece5.png', 140, 140);
        createImageFromPath('piece6.png', 160, 160);

    }

    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
