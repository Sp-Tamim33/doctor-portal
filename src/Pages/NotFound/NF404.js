import React from 'react';
import Img from './notfound404.jpg'

const NF404 = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 text-secondary font-semibold'>Page Not Found !</h1>
            <div className=''>
                <img className='mx-auto md:max-w-screen-md' src={Img} alt="" />
            </div>
        </div>
    );
};

export default NF404;