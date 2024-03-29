import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Map from '../imports/ui/Map.jsx';
import Cloud from '../imports/ui/Cloud.jsx';


// find out coords via image scale


Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
