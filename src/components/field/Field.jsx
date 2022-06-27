import React from 'react';
import './Field.scss';

const Field = ({children}) => {
    return (
        <div className='field'>
            {children}
        </div>
    );
};

export default Field;