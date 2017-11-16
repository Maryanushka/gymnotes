
import React from 'react';
import ReactDom from 'react-dom';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import routes from './routes.js';
import Base from './components/Base.jsx';
// remove tap delay, essential for MaterialUI to work properly
//injectTapEventPlugin();

ReactDom.render((
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <BrowserRouter>
            <Route history={browserHistory} routes={routes} />

        </BrowserRouter>
    </MuiThemeProvider>), document.getElementById('react-app'));