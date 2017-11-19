import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main.jsx';
import Header from './Header.jsx';

const StartPage = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="top-bar">
            <Main/>
            <Header/>
        </div>
    </MuiThemeProvider>
);




export default StartPage;