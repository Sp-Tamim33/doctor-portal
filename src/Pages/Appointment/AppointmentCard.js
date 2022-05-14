import React from 'react';

const AppointmentCard = ({ item, setClick }) => {
    const { name, slots } = item;
    return (
        <div>
            <div className="card md:max-w-md bg-base-100 shadow-xl px-5">
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto text-secondary font-semibold">{name}</h2>
                    <p>{slots.length > 1 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>}</p>
                    <p>{slots.length} Service Available</p>
                    <div className="card-actions justify-center">

                        <label onClick={() => setClick(item)} disabled={slots.length < 1 ? true : false} for="booking-modal" class="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;