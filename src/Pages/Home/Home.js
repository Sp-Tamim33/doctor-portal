import React from 'react';
import Banner from './Banner';
import Checkup from './Checkup';
import ServiceSection from './ServiceSection/ServiceSection';
import TimeSection from './TimeSection/TimeSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <TimeSection />
            <ServiceSection />
            <Checkup />
        </div>
    );
};

export default Home;