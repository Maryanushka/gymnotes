import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/HomePage';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { browserHistory, Router } from 'react-router';
//import routes from './routes.js';
import { Card, CardTitle } from 'material-ui/Card';
// remove tap delay, essential for MaterialUI to work properly
//injectTapEventPlugin();

ReactDom.render( <MuiThemeProvider>
                    <HomePage/>
                </MuiThemeProvider>, document.getElementById('react-app'));