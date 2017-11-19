import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <HomePage/>}/>
            <Route path="/login" render={() => <LoginPage/>}/>
            <Route path="/signup" render={() => <SignUpPage/>}/>
        </Switch>
    </main>
);

export default Main;