import React from 'react';
import "./Heading.scss";
const Heading = ({children}) => {
    return (
        <div>
            <h1 >{children}</h1>
        </div>
    );
};

export default Heading;