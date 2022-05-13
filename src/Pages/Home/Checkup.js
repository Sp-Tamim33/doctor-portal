import React from 'react';
import checkupImg from '../../assets/images/treatment.png'

const Checkup = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={checkupImg} className="md:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div className='md:ml-16 md:w-[600px]'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, reprehenderit id? Beatae illum quo provident aut ut unde, ipsam amet? Hic dolorem sapiente amet quo tempora eum veritatis ea ullam harum accusantium, voluptatum commodi repellendus repudiandae quisquam illum doloribus.</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkup;