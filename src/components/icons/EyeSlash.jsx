import React from 'react';
import {BsEyeSlash} from 'react-icons/bs'

const EyeSlash = ({className="", onClick= () => {}}) => {
    return (
        <>
            <BsEyeSlash className={className} onClick={onClick}></BsEyeSlash>
        </>
    );
};

export default EyeSlash;