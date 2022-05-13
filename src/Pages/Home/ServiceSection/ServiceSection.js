import React from 'react';
import ServiceSectionCard from './ServiceSectionCard';
import florideImg from '../../../assets/images/fluoride.png'
import cavityImg from '../../../assets/images/cavity.png'
import tethImg from '../../../assets/images/whitening.png'

const ServiceSection = () => {
    return (
        <div className='py-16 max-w-7xl mx-auto'>
            <p className='text-secondary font-semibold text-center text-xl'>Our Services</p>
            <h1 className='pt-4 text-center text-4xl'>Service We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <ServiceSectionCard
                    img={florideImg}
                    header="Fluoride Treatment"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate magni autem eum voluptatibus quam."
                />
                <ServiceSectionCard
                    img={cavityImg}
                    header="Cavity Filling"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate magni autem eum voluptatibus quam."
                />
                <ServiceSectionCard
                    img={tethImg}
                    header="Teeth Whitening"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate magni autem eum voluptatibus quam."
                />
            </div>
        </div>
    );
};

export default ServiceSection;