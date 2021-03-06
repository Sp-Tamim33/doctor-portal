import { format } from 'date-fns';
import React from 'react';
import chairImg from '../../assets/images/chair.png';
import bgImg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {


    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p className='mt-10'>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <div>
            <div className="hero min-h-[90vh] bg-base-200" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chairImg} className="md:max-w-lg rounded-lg shadow-2xl md:ml-16" alt='' />
                    <div className='bg-white rounded-lg md:mr-10'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;