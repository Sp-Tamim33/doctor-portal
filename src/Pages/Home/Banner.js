import React from 'react';
import chairImg from '../../assets/images/chair.png';
import bgImg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[90vh] bg-base-200" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chairImg} className="md:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Start Here !</h1>
                        <p className="py-6 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veniam fugiat, aperiam optio explicabo voluptate consequuntur eius minus nobis recusandae!</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;