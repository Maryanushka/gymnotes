import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth';

class Header extends React.Component {

    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            SiteText: 'WebSite Name',
            loginText: 'Log In',
            signupText: 'Sign up',
            userWelcomeText: 'Hello ',
            redirect: false,
        };

        this.onLogOutClicked = this.onLogOutClicked.bind(this);
    }

    onLogOutClicked()
    {
        Auth.deauthenticateUser();
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <Link to="/">{this.state.SiteText}</Link>
                </div>


                <div>
                    {Auth.isUserAuthenticated() == true ? (
                        <div className="top-bar-left">
                            {this.state.userWelcomeText} {JSON.parse(localStorage.getItem('usrname')).name}!
                        </div>
                    ):
                        (
                            <div>
                            </div>
                        )}

                </div>


                {Auth.isUserAuthenticated() == false ? (
                    <div className="top-bar-right">
                        <Link to="/login">{this.state.loginText}</Link>
                        <Link to="/signup">{this.state.signupText}</Link>
                    </div>
                ):
                    (
                        <div className="top-bar-right">
                            <Link to="/login" onClick={this.onLogOutClicked.bind(this)}>Log out</Link>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default Header;