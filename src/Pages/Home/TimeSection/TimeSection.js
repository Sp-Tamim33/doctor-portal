import React from 'react';
import TimeSectionCard from './TimeSectionCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const TimeSection = () => {
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 py-16 gap-4'>
            <TimeSectionCard
                img={clock}
                bg="bg-gradient-to-r from-secondary to-primary text-white"
                header="Opening Hour"
                body="24 our open take appointment"
            />
            <TimeSectionCard
                img={marker}
                bg="bg-accent text-white"
                header="Visit Our Location"
                body="Brahmanbaria, Bangladesh"
            />
            <TimeSectionCard
                img={phone}
                bg="bg-gradient-to-r from-secondary to-primary text-white"
                header="Contact us"
                body="+00134397493848"
            />
        </div>
    );
};

export default TimeSection;