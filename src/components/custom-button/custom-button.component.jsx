import React from "react";
import { Button } from "reactstrap";

import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <div className='button'>
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...otherProps}>
            {children}
        </button>
    </div>
);

export default CustomButton;
