import React from 'react';
import bg from '../../assets/images/appointment.png'

const ContactSection = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="py-16">
            <p className='text-secondary font-semibold text-lg text-center'>Contact Us</p>
            <h1 className='text-xl md:text-4xl font-semibold py-3 text-center text-white mb-3'>Stay Connected with us</h1>
            <form className='md:w-[500px] mx-auto px-5'>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <textarea type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                </div>
                <div className='text-center'>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Send Message</button>
                </div>
            </form>

        </div>
    );
};

export default ContactSection;