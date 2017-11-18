import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'
//import Station from 'Station.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var app = new PIXI.Application(1000, 300, {
            backgroundColor: 0xFFFFFF
        });
        this.refs.gameCanvas.appendChild(app.view);

        var style = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
        });

        var style2 = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fill: ['#FF0000', '#FF0000']
        });

        var styleHover = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fontWeight: 'bold'
        });
        var style2Hover = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fill: ['#FF0000', '#FF0000'],
          fontWeight: 'bold'
        });

        var graphics = new PIXI.Graphics();
        graphics.lineStyle(0);
        graphics.beginFill(0x606060, 0.5);
        graphics.drawRect(0, 200, 1000, 100);
        app.stage.addChild(graphics);


        var albert = PIXI.Sprite.fromImage('/img/Hat_man1.png');
        // albert.buttonMode = true;
        // albert.interactive = true;
        albert.anchor.set(0.5);
        albert.x = (app.renderer.width * 2) / 3;
        albert.y = app.renderer.height / 2;
        albert.on('pointerdown', function(){
        });
        app.stage.addChild(albert);

        var user = PIXI.Sprite.fromImage('/img/Hat_man2.png');
        // user.buttonMode = true;
        // user.interactive = true;
        user.anchor.set(0.5);
        user.x = (app.renderer.width * 1) / 3;
        user.y = app.renderer.height / 2;
        user.on('pointerdown', function(){
        });
        app.stage.addChild(user);

        var albertsTurn = true;


        var albertInt = 0;
        var albertList = ['Albert: What issue do you have?', 'Albert: Follow me!'];
        var userInt = 0;
        var userList = [cancerList, 'You: My doctor told me I have bone cancer, what should I do?'];
        var cancerList = [new PIXI.Text('Leukaemia', style2),
                          new PIXI.Text('Thyroid cancer', style2),
                          new PIXI.Text('Bone cancer', style2),
                          new PIXI.Text('Melanoma', style2),
                          new PIXI.Text('Soft tissue sarcomas', style2)];

        var albertText = new PIXI.Text('Albert: Hi!', style);
        albertText.x = 20;
        albertText.y = 210;
        albertText.buttonMode = true;
        albertText.interactive = true;
        albertText.mouseover = function(mouseData) {
          this.style = styleHover;
        }
        albertText.mouseout = function(mouseData) {
          this.style = style;
        }
        albertText.on('pointerdown', function(){
            userText.visible = true;
            albertText.visible = false;
            if (userInt == 1) { //cancerList
              userText.visible = false;
              for (i = 0; i < 5; i++) {
                cancerList[i].x = 10 + i*180;
                cancerList[i].y = 200;
                cancerList[i].buttonMode = true;
                cancerList[i].interactive = true;
                cancerList[i].visible = true;
                cancerList[i].mouseover = function(mouseData) {
                  this.style = style2Hover;
                }
                cancerList[i].mouseout = function(mouseData) {
                  this.style = style2;
                }
                app.stage.addChild(cancerList[i]);
              }
            }
            if (userInt == 2) { //conclusion
              //exit
            }
            albertText.setText(albertList[albertInt]);
            albertInt++;
        });

        var userText = new PIXI.Text('You: Hello Albert!', style);
        userText.x = 20;
        userText.y = 210;
        userText.buttonMode = true;
        userText.interactive = true;
        userText.visible = false;
        userText.mouseover = function(mouseData) {
          this.style = styleHover;
        }
        userText.mouseout = function(mouseData) {
          this.style = style;
        }
        userText.on('pointerdown', function(){
            userText.visible = false;
            albertText.visible = true;
            userText.setText(userList[userInt]);
            userInt++;
        });

        var boneCancerText = cancerList[2];
        boneCancerText.on('pointerdown', function(){
            userText.setText(userList[userInt]);
            userText.visible = true;
            for (i = 0; i < 5; i++) {
              cancerList[i].visible = false;
            }
        });

        app.stage.addChild(albertText);
        app.stage.addChild(userText);
    }

    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
