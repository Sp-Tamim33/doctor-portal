import React from 'react';
import doctorImg from "../../assets/images/doctor-small.png";
import bg from "../../assets/images/appointment.png";

const AppointmentSection = () => {
    return (
        <div style={{ background: `url(${bg})` }} className='flex justify-center items-center mt-28'>
            <div className='hidden flex-1 md:block'>
                <img className='mt-[-100px]' src={doctorImg} alt="" />
            </div>
            <div className='flex-1 p-5 text-white'>
                <p className='text-secondary font-semibold text-lg'>Appointment</p>
                <h1 className='text-3xl font-semibold py-3'>Make an Appointment Today !</h1>
                <p className='md:w-[600px] py-3 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero eaque praesentium iusto doloremque laboriosam tenetur soluta officia ullam omnis, expedita fugiat accusantium, sed necessitatibus iure reiciendis. Eligendi, accusamus distinctio! oloremque laboriosam tenetur soluta officia ullam omnis, expedita fugiat accusantium, sed necessitatibus iure reiciendis. Eligendi, accusamus distinctio</p>
                <button className="mt-3 btn bg-gradient-to-r from-secondary to-primary text-white border-0">Get Started</button>
            </div>
        </div>
    );
};

export default AppointmentSection;