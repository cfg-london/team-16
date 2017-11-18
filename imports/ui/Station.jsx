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
        var albertList = ['What issue do you have?', 'Follow me!'];
        var userInt = 0;
        var userList = [cancerList, 'My doctor told me I have bone cancer, what should I do?'];
        var cancerList = [new PIXI.Text('Acute lymphoblastic leukaemia'),
                          new PIXI.Text('Thyroid cancer'),
                          new PIXI.Text('Bone cancer'),
                          new PIXI.Text('Hodgkin lymphoma'),
                          new PIXI.Text('Melanoma')]

        var style = new PIXI.TextStyle({
          fontFamily: 'Arvo',
          fontSize: 20,
        });

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

        var userText = new PIXI.Text('Hello Albert!');
        userText.x = 10;
        userText.y = 200;
        userText.buttonMode = true;
        userText.interactive = true;
        userText.visible = false;
        userText.on('pointerdown', function(){
            userText.visible = false;
            albertText.visible = true;
            if (userInt == 1) { //cancerList
              alert("hi");
              for (var i = 0; i < 4; i++) {
                cancerList[i].x = 10 + i*180;
                cancerList[i].y = 200;
                cancerList[i].buttonMode = true;
                cancerList[i].interactive = true;
                app.stage.addChild(cancerList[i]);
              }
            }
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
