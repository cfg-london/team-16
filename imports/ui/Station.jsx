import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'
//import Station from 'Station.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var app = new PIXI.Application(1000, 450, {
            // backgroundImage: url("/img/forest.jpg")
            backgroundColor: 0xFFFFFF

        });
        this.refs.gameCanvas.appendChild(app.view);

        var landscapeTexture = PIXI.Texture.fromImage("/img/forest.jpg");

        // crop the texture to show just 100 px
        var texture2 = new PIXI.Texture(landscapeTexture, new PIXI.Rectangle(0, 0, 1000, 450));

        // new sprite
        var background = new PIXI.Sprite(texture2);


        background.anchor.x = 0;
        background.anchor.y = 0;

        background.position.x = 0;
        background.position.y = 0;

        app.stage.addChild( background );


        var style = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fill: ['#FFFFFF', '#FFFFFF'],
          wordWrap: true,
          wordWrapWidth: 900,
          paddingTop: 50,
          paddingLeft: 80
        });

        var style2 = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fill: ['#FF0000', '#FF0000'],
          wordWrap: true,
          wordWrapWidth: 900,
          paddingTop: 100,
          paddingLeft: 80
        });

        var styleHover = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fontWeight: 'bold',
          fill: ['#FFFFFF', '#FFFFFF'],
          wordWrap: true,
          wordWrapWidth: 900,
          paddingTop: 50,
          paddingLeft: 80
        });
        var style2Hover = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fill: ['#FF8c00', '#ff8c00'],
          wordWrap: true,
          wordWrapWidth: 900,
          fontWeight: 'bold',
          paddingTop: 100,
          paddingLeft: 80
        });

        var graphics = new PIXI.Graphics();
        graphics.lineStyle(3);
        graphics.beginFill(0x3f3f3f, 1);
        graphics.drawRect(0, 350, 1000, 150);
        graphics.alpha = 0.5;
        app.stage.addChild(graphics);


        var albert = PIXI.Sprite.fromImage('/img/Hat_man1.png');

        albert.anchor.set(0.5);
        albert.x = (app.renderer.width * 2) / 3;
        albert.y = app.renderer.height / 2;
        albert.on('pointerdown', function(){
        });
        app.stage.addChild(albert);

        var user = PIXI.Sprite.fromImage('/img/Hat_man2.png');

        user.anchor.set(0.5);
        user.x = (app.renderer.width * 1) / 3;
        user.y = app.renderer.height / 2;
        user.on('pointerdown', function(){
        });
        app.stage.addChild(user);

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
        albertText.x = 40;
        albertText.y = 382;
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
                cancerList[i].x = 40 + i*180;
                cancerList[i].y = 382;
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
              userText.visible = false;
              //exit
            }
            albertText.setText(albertList[albertInt]);
            albertInt++;
        });

        var userText = new PIXI.Text('You: Hello Albert!', style);
        userText.x = 40;
        userText.y = 382;
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
