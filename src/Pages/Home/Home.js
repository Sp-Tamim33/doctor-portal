import React from 'react';
import Banner from './Banner';
import Checkup from './Checkup';
import ServiceSection from './ServiceSection/ServiceSection';
import TimeSection from './TimeSection/TimeSection';
import AppointmentSection from './AppointmentSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import ContactSection from './ContactSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <TimeSection />
            <ServiceSection />
            <Checkup />
            <AppointmentSection />
            <TestimonialSection />
            <ContactSection />
        </div>
    );
};

export default Home;