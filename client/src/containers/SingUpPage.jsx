import React, { PropTypes } from 'react';
import SingUpForm from '../components/SingUpForm';

class SingUpPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event){
        event.preventDefault();

        console.log('name: ', this.state.user.name);
        console.log('email: ', this.state.user.email);
        console.log('password: ', this.state.user.password);
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    render(){
        return(
            <SingUpForm onSubmit={this.processForm}
                        onChange={this.changeUser}
                        errors={this.state.errors}
                        user={this.state.user}
            />
        );
    }
}

export default SingUpPage;