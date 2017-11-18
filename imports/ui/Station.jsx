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

        });

        var nextText = new PIXI.Text('Next');
        nextText.x = 400;
        nextText.y = 50;
        nextText.buttonMode = true;
        nextText.interactive = true;
        nextText.visible = false;
        nextText.on('pointerdown', function(){
          if (albertInt < 3) {
            albertText.setText(albertList[albertInt + 1]);
          } else if (albertInt == 3){
          albertText.visible = true;
          albertText.setText(albertList[0]);
          userText.visible = false;
          quitText.visible = true;
          }
        });

        app.stage.addChild(albertText);
        app.stage.addChild(userText);
        app.stage.addChild(nextText);
        app.stage.addChild(quitText);



    }


    render() {
        return (
         <div className="game-canvas-container" ref="gameCanvas"></div>
        );
    }
}
