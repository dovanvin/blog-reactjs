import React from 'react';
import ContentLayout from '../../components/layout/content_layout/ContentLayout';
import Banner from '../../module/home/banner/Banner';
import Feature from '../../module/home/feature/Feature';
import Newest from '../../module/home/newest/Newest';

const HomePage = () => {
    

    return (
        <div>
            <ContentLayout>
             <Banner></Banner>
             <Feature></Feature>
             <Newest></Newest>
            </ContentLayout>
        </div>
    );
};

export default HomePage;