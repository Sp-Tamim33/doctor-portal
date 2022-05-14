import React from 'react';
import Banner from './Banner';
import Checkup from './Checkup';
import ServiceSection from './ServiceSection/ServiceSection';
import TimeSection from './TimeSection/TimeSection';
import AppointmentSection from './AppointmentSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import ContactSection from './ContactSection';
import Footer from '../../Shared/Footer';

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
            <Footer />
        </div>
    );
};

export default Home;