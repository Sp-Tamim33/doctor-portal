import React from 'react';
import Banner from './Banner';
import ServiceSection from './ServiceSection/ServiceSection';
import TimeSection from './TimeSection/TimeSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <TimeSection />
            <ServiceSection />
        </div>
    );
};

export default Home;