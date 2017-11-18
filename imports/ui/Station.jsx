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

        // Moving my circle
        albert.anchor.set(0.5);
        albert.x = (app.renderer.width * 2) / 3;
        albert.y = app.renderer.height / 2;

        albert.on('pointerdown', function(){


        });


        app.stage.addChild(albert);

        var user = PIXI.Sprite.fromImage('/img/cat.png')


        user.buttonMode = true;
        user.interactive = true;

        // Moving my circle
        user.anchor.set(0.5);
        user.x = (app.renderer.width * 1) / 3;
        user.y = app.renderer.height / 2;

        user.on('pointerdown', function(){
            // app.stage.getChildAtIndex(0);
            user.width *= 2;
            user.height *= 2;
        });
        app.stage.addChild(user);

        var albertText = new PIXI.Text('....');
        albertText.x = 500;
        albertText.y = 100;

        albertText.buttonMode = true;
        albertText.interactive = true;

        albertText.on('pointerdown', function(){
            albertText.setText('Hello! I am albert.');
            app.stage.removeChild(albertTextbox);
            albertTextbox = new PIXI.Graphics();
            albertTextbox.beginFill(20, 0.2);
            albertTextbox.drawRect(albertText.x, albertText.y, albertText.width, albertText.height);
            albertTextbox.endFill();
            app.stage.addChild(albertTextbox);
        });

        var userText = new PIXI.Text('Hi, who are you?');
        userText.x = 300;
        userText.y = 100;

        userText.buttonMode = true;
        userText.interactive = true;

        userText.on('pointerdown', function(){
            userText.setText('CHanged!');
            app.stage.removeChild(userTextbox);
            userTextbox = new PIXI.Graphics();
            userTextbox.beginFill(20, 0.2);
            userTextbox.drawRect(userText.x, userText.y, userText.width, userText.height);
            userTextbox.endFill();
            app.stage.addChild(userTextbox);
        });

        app.stage.addChild(albertText);
        app.stage.addChild(userText);

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
