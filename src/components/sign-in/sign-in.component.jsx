import React from 'react';
import FormInput from './../form-input/form-input.component';
import ButtonComponent from './../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from './../../firebase/firebase.util';
import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(error.message);
        }

    }

    handleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form noValidate onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        label="Email"
                        handleChange={(ev) => this.handleChange(ev)}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        label="Password"
                        handleChange={(ev) => this.handleChange(ev)}
                    />
                    <div className='buttons'>
                        <ButtonComponent type="submit">Submit Form</ButtonComponent>
                        <ButtonComponent type="button" isGoogleSignIn onClick={SignInWithGoogle}>Sign in with Google</ButtonComponent>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
