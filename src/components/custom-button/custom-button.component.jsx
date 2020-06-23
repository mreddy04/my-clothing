import React from 'react';
import './custom-button.styles.scss';

const ButtonComponent = ({ children, isGoogleSignIn, inverted, ...otherProps}) => {
    return(
        <button {...otherProps}
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : '' } custom-button`} >
            {children}
        </button>
    );
}

export default ButtonComponent;
