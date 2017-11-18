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
            circle.drawCircle(x, y, 10);
            circle.endFill();

            circle.recordX = x;
            circle.recordY = y;
            circle.buttonMode = true;
            circle.interactive = true;

            return circle
        }

        var NUM_CIRCLES = 6;
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        var ringRadius = 100;


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
        var colors = [0xFF0000, 0xFFFF00, 0x80FF00, 0x00FFFF, 0x800000, 0xFF00FF];
        for (var i = 0; i < NUM_CIRCLES; i++) {
            var angle = (i+1) * 2 * Math.PI/NUM_CIRCLES;
            var x = centerX + Math.cos(angle) * ringRadius;
            var y = centerY + Math.sin(angle) * ringRadius;

            var tem = createCircle(x, y, colors[i]);
            circles.push(tem);
            app.stage.addChild(tem);
        }

        var texts = []
        for (int i = 0; i < NUM_CIRCLES; i++) {
            texts.push(new PIXI.Text('Basic text in pixi'));
        }

        console.log(circles);
        circles.forEach(function(item){
            item.on('pointerdown', function() {
                item.clear();
                item.lineStyle(2, 0x000000);
                item.beginFill(0x00FF00, 1);
                item.drawCircle(item.recordX, item.recordY, 10);
                item.endFill();
            });
        })
    }


    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
