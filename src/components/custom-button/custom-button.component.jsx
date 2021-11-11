import React from "react";
import { Button } from "reactstrap";

import "./custom-button.styles.scss";

const CustomButton = ({children, ...otherProps}) => (
    <div>
        <Button
            variant={otherProps.color}
            className="custom-button"
            >
            {children}
        </Button>
    </div>
);

export default CustomButton;
