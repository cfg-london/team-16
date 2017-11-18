import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Map from '../imports/ui/Map.jsx';
import Cloud from '../imports/ui/Cloud.jsx';


// find out coords via image scale

// var img = document.getElementById("board");
// var height = img.height;
// var width = img.width;

const coords="0, 0, 100, 102";



Meteor.startup(() => {
  document.getElementById("firstRegion").coords = coords;
  render(<Cloud />, document.getElementById('render-target'));
});
