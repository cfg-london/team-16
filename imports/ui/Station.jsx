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
        var albertList = ['Follow me!'];
        var userInt = 0;
        var userList = ['My doctor told me I have bone cancer, what should I do?'];

        var albertText = new PIXI.Text('Hi!');
        albertText.x = 10;
        albertText.y = 200;
        albertText.buttonMode = true;
        albertText.interactive = true;
        albertText.on('pointerdown', function(){
            userText.visible = true;
            albertText.visible = false;
            albertText.setText(albertList[albertInt]);
            albertInt++;
        });

        var userText = new PIXI.Text('Hello albert!');
        userText.x = 10;
        userText.y = 200;
        userText.buttonMode = true;
        userText.interactive = true;
        userText.visible = false;
        userText.on('pointerdown', function(){
            userText.visible = false;
            albertText.visible = true;
            userText.setText(userList[userInt]);
            userInt++;
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
