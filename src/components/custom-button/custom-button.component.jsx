import React from "react";
import { Button } from "reactstrap";

import "./custom-button.styles.scss";

const CustomButton = ({children, ...otherProps}) => (
    <div>
        <Button
            color={otherProps.color}
            className="custom-button"
            {...otherProps}>
            {children}
        </Button>
    </div>
);

export default CustomButton;
