
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import routes from './routes.js';
import StartPage from './components/StartPage.jsx';

// ReactDom.render((
//     <MuiThemeProvider muiTheme={getMuiTheme()}>
//         <BrowserRouter>
//             <Route history={browserHistory} routes={routes} />
//
//         </BrowserRouter>
//     </MuiThemeProvider>), document.getElementById('react-app'));

ReactDom.render((
        <BrowserRouter>
            <StartPage />
        </BrowserRouter>
        ),
        document.getElementById('react-app'));