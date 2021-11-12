import React from "react";
import { Button } from "reactstrap";

import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <div className='button'>
        <button
            className={
                `${isGoogleSignIn ? 'google-sign-in' : ''}
                 ${inverted ? 'inverted' : ''}
                 custom-button`}
            {...otherProps}>
            {children}
        </button>
    </div>
);

export default CustomButton;
