import React from 'react';
import {BsEye} from 'react-icons/bs'

const EyeOpen = ({className="", onClick= () => {}}) => {
    return (
        <>
            <BsEye className={className} onClick={onClick} ></BsEye>
        </>
    );
};

export default EyeOpen;