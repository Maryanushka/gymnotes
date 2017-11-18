import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignUpPage}/>
        </Switch>
    </main>
);

export default Main;