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

        var landscapeTexture = PIXI.Texture.fromImage("/img/beach.jpg");

        // crop the texture to show just 100 px
        var texture2 = new PIXI.Texture(landscapeTexture, new PIXI.Rectangle(0, 150, 1000, 300));

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
          wordWrap: true,
          wordWrapWidth: 950
        });

        var style2 = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fill: ['#FF0000', '#FF0000'],
          wordWrap: true,
          wordWrapWidth:950
        });

        var styleHover = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fontWeight: 'bold',
          wordWrap: true,
          wordWrapWidth: 950
        });
        var style2Hover = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
          fill: ['#FF0000', '#FF0000'],
          fontWeight: 'bold',
          wordWrap: true,
          wordWrapWidth: 950
        });

        var graphics = new PIXI.Graphics();
        graphics.lineStyle(3);
        graphics.beginFill(0x606060, 0.8);
        graphics.drawRect(0, 200, 1000, 100);
        graphics.alpha = 0.5;
        app.stage.addChild(graphics);


        var albert = PIXI.Sprite.fromImage('/img/Hat_man1Flip.png')
        albert.buttonMode = true;
        albert.interactive = true;
        albert.anchor.set(0.5);
        albert.x = (app.renderer.width * 3) / 4;
        albert.y = app.renderer.height / 2;
        albert.on('pointerdown', function(){
        });
        app.stage.addChild(albert);

        var user = PIXI.Sprite.fromImage('/img/Hat_man2Flip.png');
        user.buttonMode = true;
        user.interactive = true;
        user.anchor.set(0.5);
        user.x = (app.renderer.width * 9) / 10;
        user.y = app.renderer.height / 2;
        user.on('pointerdown', function(){
        });
        app.stage.addChild(user);

        var albertInt = 0;
        var albertList = ['Albert: Surgery is when the doctors take out the tumour from your body. They make sure you are asleep so nothing will hurt!',
         'Albert: They may give you some drugs for the surgery and you might feel a little more emotional than normal. Sometimes you gain a little weight from it, but this is completely normal. Do not forget you can always talk to your doctor or your parents if you feel uncomfortable.',
         'Albert: Don\'t worry! No matter what happens to your body, you are still you and your friends will always be there for you. And you can even make new friends through CLIC Sargent!'];
        var userInt = 0;
        var userList = ['You: I think I have to do surgery.', 'You: Will anything happen?',
                        'You: I\'m scared my friends don\'t want to talk to me anymore, what can I do?', 'You: Thanks Albert! But what happens afterwards?'];
        var treatmentList = [new PIXI.Text('Surgery', style2), new PIXI.Text('Chemotherapy', style2), new PIXI.Text('Radiotherapy', style2)];

        var albertText = new PIXI.Text('Albert: Depending on your situation, you might have to do surgery, radiotherapy, or chemotherapy. What did the doctor tell you?', style);
        albertText.x = 10;
        albertText.y = 200;
        albertText.buttonMode = true;
        albertText.interactive = true;
        albertText.visible = false;
        albertText.mouseover = function(mouseData) {
          this.style = styleHover;
        }
        albertText.mouseout = function(mouseData) {
          this.style = style;
        }
        albertText.on('pointerdown', function(){
            userText.visible = true;
            albertText.visible = false;
            if (userInt == 1) { //treatment list
              userText.visible = false;
              for (i = 0; i < 3; i++) {
                treatmentList[i].x = 10 + i * 300;
                treatmentList[i].y = 200;
                treatmentList[i].buttonMode = true;
                treatmentList[i].interactive = true;
                treatmentList[i].visible = true;
                treatmentList[i].mouseover = function(mouseData) {
                  this.style = style2Hover;
                }
                treatmentList[i].mouseout = function(mouseData) {
                  this.style = style2;
                }
                app.stage.addChild(treatmentList[i]);
              }
            }
            albertText.setText(albertList[albertInt]);
            albertInt++;
        });

        var userText = new PIXI.Text('You: What treatment do I need?', style);
        userText.x = 10;
        userText.y = 200;
        userText.buttonMode = true;
        userText.interactive = true;
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

        var surgeryText = treatmentList[0];
        surgeryText.on('pointerdown', function(){
            userText.visible = true;
            for (i = 0; i < 3; i++) {
              treatmentList[i].visible = false;
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
