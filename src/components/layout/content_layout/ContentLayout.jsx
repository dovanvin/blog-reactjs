import React, { Children } from 'react';
import Header from '../header/Header';

const ContentLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            {children}
        </>
    );
};

export default ContentLayout;