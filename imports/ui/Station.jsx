import React, { Component, PropTypes } from 'react';
import PIXI from 'pixi.js'
//import Station from 'Station.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var app = new PIXI.Application(1000, 300, {
            backgroundColor: 0x00FF00
        });
        this.refs.gameCanvas.appendChild(app.view);

        var albert = PIXI.Sprite.fromImage('/img/cat.png')
        albert.buttonMode = true;
        albert.interactive = true;
        albert.anchor.set(0.5);
        albert.x = (app.renderer.width * 2) / 3;
        albert.y = app.renderer.height / 2;
        albert.on('pointerdown', function(){
        });
        app.stage.addChild(albert);

        var user = PIXI.Sprite.fromImage('/img/cat.png')
        user.buttonMode = true;
        user.interactive = true;
        user.anchor.set(0.5);
        user.x = (app.renderer.width * 1) / 3;
        user.y = app.renderer.height / 2;
        user.on('pointerdown', function(){
        });
        app.stage.addChild(user);


        var albertsTurn = true;


        var albertInt = 0;
        var albertList = ['1', '2', '3'];
        var userInt = 0;
        var userList = ['1', '2', '3'];

        var albertText = new PIXI.Text('....');
        albertText.x = 500;
        albertText.y = 100;

        albertText.buttonMode = true;
        albertText.interactive = true;
        albertText.on('pointerdown', function(){
            userText.visible = true;
            nextText.visible = true;
            quitText.visible = true;

            albertText.setText('Hello! I am albert.');
            app.stage.removeChild(albertTextbox);
            albertTextbox = new PIXI.Graphics();
            albertTextbox.beginFill(20, 0.2);
            albertTextbox.drawRect(albertText.x, albertText.y, albertText.width, albertText.height);
            albertTextbox.endFill();
            app.stage.addChild(albertTextbox);
        });


        var userText = new PIXI.Text('Hello albert!');
        userText.x = 300;
        userText.y = 100;
        userText.buttonMode = true;
        userText.interactive = true;
        userText.visible = false;

        var quitText = new PIXI.Text('Quit');
        quitText.x = 400;
        quitText.y = 100;
        quitText.buttonMode = true;
        quitText.interactive = true;
        quitText.visible = false;
        quitText.on('pointerdown', function(){
          albertText.visible = true;
          albertText.setText(albertList[0]);
          userText.visible = false;
          quitText.visible = false;
          nextText.visible = false;
          albertInt = 0;
          userInt = 0;
        });

        var nextText = new PIXI.Text('Next');
        nextText.x = 400;
        nextText.y = 50;
        nextText.buttonMode = true;
        nextText.interactive = true;
        nextText.visible = false;
        var albertTurn = true;
        nextText.on('pointerdown', function(){
          if (albertTurn) {
            if (albertInt < 3) {
              albertInt = albertInt + 1;
              albertText.setText(albertList[albertInt]);
              albertTurn = false;
            } else if (albertInt == 3) {
              albertInt = 0;
              albertText.visible = true;
              albertText.setText(albertList[albertInt]);
              userText.visible = false;
              quitText.visible = true;
              app.stage.removeChild(userTextbox);
              userTextbox = new PIXI.Graphics();
              userTextbox.beginFill(20, 0.2);
              userTextbox.drawRect(userText.x, userText.y, userText.width, userText.height);
              userTextbox.endFill();
              app.stage.addChild(userTextbox);
            }
          } else {
              if (userInt < 3) {
                userInt = userInt + 1;
                userText.setText(userList[userInt]);
                albertTurn = true;
              } else if (userInt == 3) {
                userInt = 0;
                albertText.visible = true;
                userText.setText(userList[userInt]);
                userText.visible = false;
                quitText.visible = true;
                app.stage.removeChild(userTextbox);
                userTextbox = new PIXI.Graphics();
                userTextbox.beginFill(20, 0.2);
                userTextbox.drawRect(userText.x, userText.y, userText.width, userText.height);
                userTextbox.endFill();
                app.stage.addChild(userTextbox);
            }
          }
          });

        app.stage.addChild(albertText);
        app.stage.addChild(userText);
        app.stage.addChild(nextText);
        app.stage.addChild(quitText);



        var albertTextbox = new PIXI.Graphics();
        albertTextbox.beginFill(20, 0.2);
        albertTextbox.drawRect(albertText.x, albertText.y, albertText.width, albertText.height);
        albertTextbox.endFill();
        app.stage.addChild(albertTextbox);

        var userTextbox = new PIXI.Graphics();
        userTextbox.beginFill(20, 0.2);
        userTextbox.drawRect(userText.x, userText.y, userText.width, userText.height);
        userTextbox.endFill();
        app.stage.addChild(userTextbox);

    }


    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
