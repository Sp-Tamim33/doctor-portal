import React from 'react';
import TestimonialSectionCard from './TestimonialSectionCard';
import qoute from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const TestimonialSection = () => {
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-secondary font-semibold text-lg'>Testimonial</p>
                    <h1 className='text-xl md:text-4xl font-semibold py-3'>What our patients says !</h1>
                </div>
                <div>
                    <img src={qoute} className='w-[100px] md:w-[200px]' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <TestimonialSectionCard
                    img={people1}
                    header='Nice Treatment'
                    name="Jhon Duo"
                />
                <TestimonialSectionCard
                    img={people2}
                    header='Awesome Clinic'
                    name='Alisa Jahan'
                />
                <TestimonialSectionCard
                    img={people3}
                    header='Best service'
                    name='Alex Janjana'
                />
            </div>
        </div>
    );
};

export default TestimonialSection;