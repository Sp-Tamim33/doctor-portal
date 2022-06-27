import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [bookings, setBookings] = useState();
    const [click, setClick] = useState(null);

    const formatedDate = format(date, "PP");
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [formatedDate])
    return (
        <div className='py-16'>
            <p className='text-secondary font-semibold text-lg text-center pb-5'>Available Appointment on {format(date, "PP")}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto'>
                {
                    // console.log(bookings)
                    bookings?.map(data => <AppointmentCard key={data._id} item={data} setClick={setClick} />)
                }
            </div>
            {click && <BookingModal item={click} key={click._id} date={date} setClick={setClick} />}
        </div>
    );
};

export default AvailableAppointment;