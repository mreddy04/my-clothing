import React from 'react';
import { auth, createUserProfileDocument } from './../../firebase/firebase.util';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
       const {name, value} = event.target;
       this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords didn't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.log(error.message)
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="text"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp
